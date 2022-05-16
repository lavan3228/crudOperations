// define column names and types

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('user',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        number:{
            type: DataTypes.STRING,
            allowNull: false
        },
        mail:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps: false,
        freezeTableName: true
    })

    return User
};