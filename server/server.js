require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

// middleware

const port = process.env.PORT || 3000;
const CONNECTION_URL = process.env.DATABASE_LOCAL;
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log(`Database Connected Successfully`),
      app.listen(port, () => {
        console.log(`App running on port: ${port}`);
      });
  })
  .catch((err) => console.log(err.message));
