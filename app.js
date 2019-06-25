var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL);

var indexRouter = require('./routes/index');
var publicationRouter = require('./routes/publication');
var mediasRouter = require('./routes/media');
var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var statRouter = require('./routes/stats');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/views/public')));

app.use('/', indexRouter);
app.use('/publications', publicationRouter);
app.use('/media', mediasRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/stats', statRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
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

module.exports = app;
