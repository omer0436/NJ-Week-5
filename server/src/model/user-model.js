import sequelize from '../config/connection.js';
import { DataTypes }  from 'sequelize';  

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
     {
        tableName: 'posts',
     
})

export default User