const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs"); // Assuming bcryptjs for password hashing

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    passwordConfirm: {
      type: String,
      required: [true, "Password confirmation is required"],
      validate: {
        // This only works on SAVE and CREATE
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords do not match",
      },
    },
    avatar: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    bookings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

// Middleware to hash the password before saving the user document
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined; // Remove the passwordConfirm field
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
