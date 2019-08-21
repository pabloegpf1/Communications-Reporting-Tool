const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config();
const Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PW, 
	{
		port: process.env.DB_PORT,
    	host: process.env.DB_HOST,
    	dialect: 'postgres'
  	})
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');

var indexRouter = require('./routes/index');
var impactRouter = require('./routes/impact');
var SMshareRouter = require('./routes/smShare');
var disseminationRouter = require('./routes/dissemination');
var mediasRouter = require('./routes/media');
var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var statRouter = require('./routes/stats');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/views/public')));
app.use('/favicon.ico', express.static('images/favicon.ico'));
app.use(
	session({
		secret: 'secret',
		saveUninitialized: true,
		resave: true
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', indexRouter);
app.use('/impacts', impactRouter);
app.use('/sm-shares', SMshareRouter);
app.use('/disseminations', disseminationRouter);
app.use('/media', mediasRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/stats', statRouter);

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

require('./controllers/userAuth.js')(passport, LocalStrategy);

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
