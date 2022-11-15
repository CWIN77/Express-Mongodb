const express = require('express');
const router = express();
const { setGoal, getGoals, updateGoal } = require("./goal.ctrl");

router.post("/", setGoal);
router.get("/", getGoals);
router.put("/:id", updateGoal);

module.exports = router;