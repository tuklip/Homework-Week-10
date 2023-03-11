const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController.js")

router.get("/user", userController.findUser);
router.get("/user/:id", userController.finduserById);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;