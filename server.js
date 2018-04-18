var express = require('express');
var bodyParser =  require ('body-parser');
var Todo = require('./models/todo');
const app = express();
const todoRoute = require('./controllers/todo');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/todo-app');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

// Use controller file for all routes
app.use('/', todoRoute);

/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});