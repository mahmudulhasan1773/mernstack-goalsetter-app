const asynchandler = require("express-async-handler");
//get
const getGoal = asynchandler(async (req, res) => {
  res
    .status(200)
    .json({ message: "i am from get api from controlelr function" });
});
//set
const setGoal = asynchandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("add a text field");
  }
  res.status(200).json({ message: "set goals from post api" });
});
//update
const updateGoal = asynchandler(async (req, res) => {
  res.status(200).json({ message: `update id is ${req.params.id}` });
});

//delete goal
const deleteGoal = asynchandler(async (req, res) => {
  res.status(200).json({ message: `delete id is ${req.params.id}` });
});
module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
