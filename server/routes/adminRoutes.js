const express = require("express");
const authController = require("../controllers/authController");
const tourController = require("../controllers/tourController");

const router = express.Router();

router.use(authController.protect);

router
  .route("/tours")
  .post(authController.restrictTo("admin"), tourController.createTour)
  .get(tourController.getAllTours);

router
  .route("/tours/:id")
  .patch(authController.restrictTo("admin"),tourController.updateTour)
  .delete(authController.restrictTo("admin"), tourController.delteTour)
  .get(tourController.getTour);

module.exports = router;
