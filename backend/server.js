//mongodb+srv://mmhasan:<password>@cluster0.newd1.mongodb.net/test
const express = require("express");
const connectDb = require("./config/db");

const { errorHandler } = require("./errorMiddleware/errorMiddleware");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");
connectDb();
console.log(connectDb);
//midddleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/api/goals/", goalRoutes);
app.use(errorHandler);

//run server
app.listen(port, () => {
  console.log(`this is from server and port ${port}`);
});
app.use(errorHandler);
