import sequelize from '../config/connection.js';
import {DataTypes} from "sequelize"

const Comment = sequelize.define(
    "Comment", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      //isEdited:{}
    
    
},
    {
      tableName: 'comments',
    }
    );

export default Comment;