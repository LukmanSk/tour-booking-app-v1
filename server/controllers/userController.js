const User = require("../models/userModel");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.getAllUsers = factory.getAll(User);
exports.updateMe = (req, res, next) => {
  req.params.id = req.user._id;
  if (req.body.role) {
    delete req.body.role;
    return next(new AppError(`You don't have permission to do that`, 400));
  }
  next();
};
exports.updateUser = factory.updateOne(User);
