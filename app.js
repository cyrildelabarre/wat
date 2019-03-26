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

const Teams = require('./models/teams');
const Vote = require('./models/vote');
const Classement = require('./models/classement');
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

//---->>>> GET TEAMS <<<<----
app.get('/teams', function(req, res) {
  Teams.find({}, function(err, team) {
    if(err) {
      throw err;
    }
    res.json(team);
  })
});

//---->>>> POST VOTE <<<<----
app.post('/vote', function(req, res) {
  let vote = req.body;

  Vote.create(vote, function(err, votes) {
    if(err) {
      throw err;
    }
    res.json(votes);
  })
});

//---->>>> GET ALL VOTE <<<<----
app.get('/vote', function(req, res) {
  Vote.find({}, function(err, vote) {
    if(err) {
      throw err;
    }
    res.json(vote);
  })
});

//---->>>> GET VOTE BY USER <<<<----
app.get('/vote/:id', function(req, res) {
  let userID = req.params.id

  Vote.find({userID: userID}, function(err, votes) {
    if(err) {
      throw err;
    }
    res.json(votes);
  })
});

//---->>>> POST CLASSEMENT <<<<----
app.post('/classement', function(req, res) {
  let classement = req.body;

  Classement.create(classement, function(err, standing) {
    if(err) {
      throw err;
    }
    res.json(standing);
  })
});

//---->>>> GET CLASSEMENT <<<<----
app.get('/classement', function(req, res) {
  Classement.find({}, function(err, classement) {
    if(err) {
      throw err;
    }
    const newClassement = classement.sort((a,b) => a.points < b.points)
    res.json(newClassement);
  })
});

//---->>>> GET CLASSEMENT BY USER <<<<----
app.get('/classement/:id', function(req, res) {
  let userID = req.params.id

  Classement.find({userID: userID}, function(err, classement) {
    if(err) {
      throw err;
    }
    res.json(classement);
  })
});

//---->>>> UPDATE CLASSEMENT BY USER <<<<----
app.put('/classement/:_id', function(req, res) {
  let newData = req.body;

  let update = {
    '$set': {
      points: newData.points
    }
  };

  let options = {new: false};

  Classement.updateOne({userID: req.params._id}, update, options, function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  })
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
