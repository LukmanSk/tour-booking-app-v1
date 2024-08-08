const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required"],
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: [true, "Tour reference is required"],
    },
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
      required: [true, "Payment reference is required"],
    },
    numberOfPersons: {
      type: Number,
      required: [true, "Number of persons is required"],
      min: [1, "There must be at least one person"],
    },
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
      min: [0, "Total amount cannot be negative"],
    },
    bookingStatus: {
      type: String,
      enum: ["confirmed", "canceled"],
      default: "confirmed",
      required: [true, "Booking status is required"],
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
