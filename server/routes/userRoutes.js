const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(authController.protect, userController.getAllUsers);

module.exports = router;