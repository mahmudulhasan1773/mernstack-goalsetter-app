const express = require("express");
const router = express.Router();
//get goal
router.get("/", (req, res) => {
  res.status(200).json({ message: "i am from get api" });
});
//set goal
router.post("/", (req, res) => {
  res.status(200).json({ message: "set goals" });
});
//update goal
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `update id is ${req.params.id}` });
});

//delete gaols
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `detelete goal is ${req.params.id}` });
});
module.exports = router;
