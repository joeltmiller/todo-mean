var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  title: String,
  desc: String,
  created: Date
});

module.exports = mongoose.model('task', taskSchema);
