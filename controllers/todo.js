// create routes
const express = require('express');
const route = express.Router();
// const todo = require('seed.js');
const db = require('../models');


// define the route to the index(homepage)
route.get('/', function(req, res) {
	res.render('index');
});

//get all tasks
route.get('/api/todo', function(req, res) {
	db.Todo.find(function(err, tasks) {
		if (err) {
			console.log("index error: " + err);
			res.sendStatus(500);
		}
		res.json(tasks);
	});
});

// get one task
route.get('/api/todo/:id', function (req, res) {
  db.Todo.find(function(err, tasks){
      res.json(tasks[req.params.id-1]);
  })
});

// create new task
route.post('/api/todo', function (req, res) {
 	var newTask = new db.Todo({task: req.body.task, description: req.body.description});
	newTask.save();
	res.json(newTask);
});

// delete task
route.delete('/api/todo/:id', function (req, res) {
  var taskId = req.params.id;
  db.Todo.findOneAndRemove({_id: taskId}, function(err, tasks) {
  res.json(tasks);
   });
});

// update task - doesn't work, have to refresh page
// route.post('/api/todo', function (req, res) {
//   // create new task with form data (`req.body`)
//  var newTask = req.body;
//   db.Todo.findOneAndUpdate({ $or: [ {task: newTask.task}, {description: newTask.description} ]}, newTask, {upsert: true}, function(err, tasks) {
//     res.json(tasks) 
//   });
// });


module.exports = route;