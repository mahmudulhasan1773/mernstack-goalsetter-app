const asynchandler = require("express-async-handler");
const goalModel = require("../model/goalModel");

//get
const getGoal = asynchandler(async (req, res) => {
  const goals = await goalModel.find();
  res.status(200).json(goals);
});
//set
const setGoal = asynchandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("add a text field");
  }

  const goals = await goalModel.create({
    text: req.body.text,
  });
  res.status(200).json(goals);
});
//update
const updateGoal = asynchandler(async (req, res) => {
  const goals = await goalModel.findById(req.params.id);
  if (!goals) {
    res.status(400);
    throw new Error("goal not found");
  }

  const updatedGoals = await goalModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedGoals);
});

//delete goal
const deleteGoal = asynchandler(async (req, res) => {
  const goals = await goalModel.findById(req.params.id);
  if (!goals) {
    res.status(400);
    throw new Error("goal not found");
  }

  await goals.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
