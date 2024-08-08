const express = require("express");
const authController = require("../controllers/authController");
const tourController = require("../controllers/tourController");

const router = express.Router();

router.use(authController.protect, authController.restrictTo("admin"));

router
  .route("/tours")
  .post(tourController.createTour)
  .get(tourController.getAllTours);

router
  .route("/tours/:id")
  .patch(tourController.updateTour)
  .delete(tourController.delteTour)
  .get(tourController.getTour);

module.exports = router;
