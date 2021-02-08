const express = require("express");
const router = express.Router();
const Task = require("../Models/tasks");

//Handling home page
router.get("/", (req, res) => {
    Task.find({}, (err, tasks) => {
		if (err) {
			console.log("Error connecting to database");
		}

		return res.render("home", {
			tasks: tasks,
		});
	});
});

//Adding new posts
router.post("/add-task", (req, res) => {
	Task.create({
		task: req.body.task,
		dueDate: req.body.dueDate,
		category: req.body.category,
	});
	return res.redirect("back");
});

//Deleting completed tasts
router.post("/delete-task", (req, res) => {
	Task.deleteMany({ _id: req.body.deleteTask }, (err) => {
		if (err) {
			console.log(err);
			return;
		}
	});
	return res.redirect("back");
});

module.exports = router;
