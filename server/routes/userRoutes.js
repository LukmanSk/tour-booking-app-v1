const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const bookingRouter = require("../routes/bookingRoutes");
const router = express.Router();

// user bookings
router.use("/bookings", bookingRouter);

router.use(authController.protect);

router
  .route("/")
  .get(authController.restrictTo("admin"), userController.getAllUsers);
router
  .route("/profile")
  .patch(
    userController.uploadUserPhoto,
    userController.updateMe,
    userController.updateUser
  )
  .get(authController.protect, userController.getMe, userController.getUser)
  .delete(userController.getMe, userController.deleteUser);

router.use(authController.restrictTo("admin"));

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
