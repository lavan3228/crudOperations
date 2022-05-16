const router = require("express").Router();

const userValidation = require("../validations");

const {validate} = require("express-validation");

const {addUser, getUsers, getUser, deleteUser, updateUser} = require("../controllers/controller");

router.post("/addUser",validate(userValidation.createUserValidation), addUser);

router.get("/allusers", getUsers);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.put("/:id",validate(userValidation.updateValidation), updateUser);


module.exports = router;