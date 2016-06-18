var express = require('express');
var router = express.Router();
var path = require('path');
var task = require('../models/task.js');

router.get('/', function (req, res) {
  task.find({}, function (err, things) {
    res.send(things);
  });
});

router.post('/', function (req, res) {
  console.log('My stuff:', req.body);
  task.create(req.body, function (err, thing) {
    res.send(thing);
  });
});

router.delete('/:id', function (req, res) {
  console.log(req.params.id);
  task.remove({ _id:req.params.id }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send('ok');
  });
});

module.exports = router;
