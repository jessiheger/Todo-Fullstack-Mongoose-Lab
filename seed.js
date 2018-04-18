var db = require('./models');

var todoList = [
  {
    task: "Dishes",
    description: "Wash the dishes",
  },
  {
    task: "Cat",
    description: "Feed the cat",
  },
  {
    task: "Shop",
    description: "Go to the grocery store",
  },
  {
    task: "Grandma",
    description: "Call grandma",
  }
];

// remove all records that match {} -- which means remove ALL records
db.Todo.remove({}, function(err, tasks){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all tasks');

// create new records based on the array taskList
    db.Todo.create(todoList, function(err, tasks){
      if (err) { return console.log('err', err); }
      console.log("created", todoList.length, "tasks");
      process.exit();
    });
  }
});

// TO SEED A DATABASE, IN THE TERMINAL, TYPE `NODE SEED.JS`