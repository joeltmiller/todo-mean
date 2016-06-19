var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var todo = require('./routes/todo');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newDatabase');



app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', index);
app.use('/todo', todo);

// var server = app.listen(process.env.PORT || 3000, function () {
  // var port = server.address().port;
  // console.log('Listening on', port, 'press ctrl+c to terminate');
// });

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
