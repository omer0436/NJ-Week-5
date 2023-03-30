import Comment from "../model/comment-model.js";
import Post from "../model/post-model.js";
import User from "../model/user-model.js";
import sequelize from "./connection.js";

User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await User.sync({ alter: true });
    await Post.sync({ alter: true });
    await Comment.sync({ alter: true });
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectToDatabase();