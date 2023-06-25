var mongoose = require('mongoose');
var express = require('express');
const User = require('../public/model/user.model');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/user/signup', (req, res) => {
  if (req.body._id == "") {
    insertRecord(req, res);
  }
  res.send('Got a POST request')
})
router.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

function insertRecord(req, res) {

  var user = new User();

  user.userName = req.body.fullName;

  user.passowrd = req.body.passowrd;

  user.save((err, doc) => {


  });

}

module.exports = router;
