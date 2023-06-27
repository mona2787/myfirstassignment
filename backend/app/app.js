
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');
const User = require('./public/model/user.model');

const PORT = 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { dbService } = require('./config/connection');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


let corsoptions={
  origin: 'http://localhost:4200',
  methods: 'GET, PUT, POST, DELETE, PATCH',
  preflightContinue : false,
  optionsSuccessStatus: 200

}
app.use(cors(corsoptions))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/api/user/signup', usersRouter);

app.use((req, res, next)=>{
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  console.log('First middleware');
  next();
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT,()=>{
//  let db  = new dbService();
  console.log(`server running on port ${PORT}`)
 // this.db.getConnection().then(()=>{

  //})
})

module.exports = app;
