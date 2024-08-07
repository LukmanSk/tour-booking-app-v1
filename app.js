const express = require("express");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");


// all routes 
const allRoutes = require("./routes/index")
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tasks:

// ROUTES
app.use(allRoutes)
// END 
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 400));
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;
