var mongoose = require('mongoose');
var express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = 'abcdefg';

const User = require('../public/model/user.model');
var router = express.Router();
var db = require('../config/connection');

router.use('/api', (req, res, next)=>{
  console.log('in user route');
  next();
} )

/* GET users listing. */
router.post('/api/user/login', function(req, res, next) { 
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      console.log('FetchedUser1:', user);
      fetchedUser = JSON.parse(JSON.stringify(user));
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }

      console.log('FetchedUser2:', fetchedUser);
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      console.log('error', err);
      return res.status(401).json({
        message: err.message
      });
    });
  
});

router.post('/api/user/signup', async (req, res, next) => {
  
 let hash = await  bcrypt.hash(req.body.password, 10);
 const user = new User({
   email: req.body.email,
   password: hash
   
 } );

 user
   .save()
   .then(result => {
     res.status(201).json({
       message: "User created!",
       result: result
     });
   })
   .catch(err => {
    console.log('error', err);
     res.status(500).json({
       message: err.message
     });
   });
  });

    

  

  
router.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

  
  // db.collection.model.insertOne(user, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  //  // db.close();
  // });




module.exports = router;
