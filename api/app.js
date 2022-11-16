var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var app = express();
const router  = express.Router();


var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var userProfile = require('./routes/userprofile');
let categories = require('./routes/categories');
let users = require('./routes/users');

var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(registerRouter); // Register route
app.use(loginRouter);    // Login route
app.use(userProfile);    //  User Profile (photographer)
app.use(categories);       // Categories
app.use(users);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
