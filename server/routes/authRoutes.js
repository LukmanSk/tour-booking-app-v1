const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/reset-password-request", authController.resetPasswrodRequest)
router.patch("/reset-password/:token", authController.resetPasswrod)

module.exports = router;
