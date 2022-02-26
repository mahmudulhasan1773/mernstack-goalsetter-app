const express = require("express");
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/controllrs");
const router = express.Router();
//get goal
router.route("/").get(getGoal).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
