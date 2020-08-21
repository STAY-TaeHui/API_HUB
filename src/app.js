var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv')
var bodyparser = require('body-parser');
dotenv.config();

var sequelize = require('../dbmodels/index').sequelize; // sequelize require
var indexRouter = require('./routes/index');
var connection = require('../dbmodels/mariaDBconn');

connection.createConnection();//DB연결 호출

var app = express();

// sequelize.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json);                            대신에 express.json()사용


app.use('/', indexRouter);//메인 라우터


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

  res.json(err)
});

module.exports = app;
