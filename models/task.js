var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  title: String,
  desc: String,
});

module.exports = mongoose.model('task', taskSchema);
