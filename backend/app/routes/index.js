var express = require('express');
var router = express.Router();


router.use('/', (req, res, next)=>{
  console.log('in index route');
  next();
} )

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
