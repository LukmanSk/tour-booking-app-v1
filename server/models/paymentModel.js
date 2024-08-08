const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    bookingId: {
      type: Schema.Types.ObjectId,
      ref: "Booking",
      required: [true, "Booking reference is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount cannot be negative"],
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment method is required"],
      enum: ["credit card", "debit card", "PayPal", "other"],
    },
    transactionId: {
      type: String,
      required: [true, "Transaction ID is required"],
    },
    paymentStatus: {
      type: String,
      required: [true, "Payment status is required"],
      enum: ["completed", "refunded", "pending"],
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
