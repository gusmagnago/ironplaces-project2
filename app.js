'use strict';

const { join } = require('path');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const serveFavicon = require('serve-favicon');
<<<<<<< HEAD
const bodyParser = require('body-parser');
=======
const hbs = require('hbs');

>>>>>>> cc4e00b5d34774852547c70537ea669865d362a9
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const mongoose = require('mongoose');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const placesRouter = require('./routes/places');

const app = express();

// Setup view engine
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(serveFavicon(join(__dirname, 'public/images', 'favicon.ico')));
app.use(express.static(join(__dirname, 'public')));
app.use(sassMiddleware({
  src: join(__dirname, 'public'),
  dest: join(__dirname, 'public'),
  outputStyle: process.env.NODE_ENV === 'development' ? 'nested' : 'compressed',
  sourceMap: true
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 60 * 60 * 24 * 1000 },
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60
  })
}));
mongoose.connect("mongodb://localhost/deploy-exercise");


<<<<<<< HEAD
=======
app.use((req, res, next) => {
  // Access user information from within my templates
  res.locals.user = req.session.user;
  // Keep going to the next middleware or route handler
  next();
});

hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

>>>>>>> cc4e00b5d34774852547c70537ea669865d362a9
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', placesRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  // Set error information, with stack only available in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  res.status(error.status || 500);
  res.render('error');
});

module.exports = app;
