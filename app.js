const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const app = express();


const users = require('./routes/user');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'client/public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

// API
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb+srv://Grimack:Cheil2017@cluster0-8bj8r.mongodb.net/WaT?retryWrites=true';

async function main() {
  const client = mongoose.connect(url, { useNewUrlParser: true });

  try {
    await client;
    console.log('Connection established to MongoDB !');
  } catch (err) {
    console.dir(err);
  }
}

main().catch(console.dir);

app.use(passport.initialize());
require('./passport')(passport);
app.use('/', users);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
});


// END API

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
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
