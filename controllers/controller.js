const db = require("../models");

const User = db.user;

const addUser = async (req,res) =>{

    const user = await User.create({name:req.body.name, number:req.body.number, mail:req.body.mail, address:req.body.address})
    res.send(user).status(200)

};

const getUsers = async (req,res) =>{
    const users = await User.findAll()
    res.send(users).status(200)

};

const getUser = async (req, res) =>{
    const user = await User.findOne({where:{id:req.params.id}})
    res.send(user).status(200)
};

const deleteUser = async (req, res) =>{
    const user = await User.destroy({where:{id:req.params.id}})
    res.send("user deleted successfully").status(200)
};

const updateUser = async (req, res) =>{
    const user = await User.update({name:req.body.name,number:req.body.number,mail:req.body.mail,address:req.body.address},{where:{id:req.params.id}})
    res.send("user updated successfully").status(200)
};

module.exports = {addUser, getUsers, getUser, deleteUser, updateUser};