const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");
//midddleware
app.use("/api/goals/", goalRoutes);
app.use(express.json());
//run server
app.listen(port, () => {
  console.log(`this is from server and port ${port}`);
});
