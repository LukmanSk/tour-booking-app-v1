const express = require("express");
const authController = require("../controllers/authController");
const bookingController = require("../controllers/bookingController");

const router = express.Router({ mergeParams: true });
router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    bookingController.getAllBookings
  );

router.use(authController.protect, authController.restrictTo("customer"));

// create checkout session
router
  .route("/checkout-session/:tourId")
  .get(bookingController.createCheckoutSession);
router
  .route("/")
  .post(bookingController.createBooking)
  .get(bookingController.getAllBookings);


router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.cancelBooking, bookingController.updateBooking);

router.route("/:id").get(bookingController.getBooking);

module.exports = router;
