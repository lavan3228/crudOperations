const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("CRUD_Sequelize","root","Root@123",
    {
        host:"localhost",
        dialect:'mysql'
    });

sequelize.authenticate()
.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
});


let db = {};

db.Sequelieze = Sequelize;
db.sequelize = sequelize;


db.user = require("./user")(sequelize, DataTypes)

db.sequelize
.sync({force: false})
.then((result)=>{
});

module.exports = db;