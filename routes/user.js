const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const getUserInput = require('../validation/getUser');

const User = require('../models/user');

//---->>>> POST USER <<<<----
router.post('/user', function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    if(user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    }
    else {
      const newUser = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        if(err) console.error('There was an error', err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) console.error('There was an error', err);
            else {
              newUser.password = hash;
              newUser
              .save()
              .then(user => {
                res.json(user)
              });
            }
          });
        }
      });
    }
  });
});

router.put('/user/:_id', function(req, res) {
  let newData = req.body;
  let query = req.params._id;

  let update = {
    '$set': {
      nom: newData.nom,
      prenom: newData.prenom,
      pseudo: newData.pseudo,
      email: newData.email
    }
  };

  let options = {new: false};

  User.findOneAndUpdate(query, update, options, function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  })
});

router.post('/login', (req, res) => {
  if(req.body.email !== undefined) {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
    .then(user => {
      if(!user) {
        errors.email = 'User not found or wrong email'
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(isMatch) {
          const payload = {
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            pseudo: user.pseudo,
            email: user.email
          }
          jwt.sign(payload, 'secret', {
            expiresIn: 3600
          }, (err, token) => {
            if(err) console.error('There is some error in token', err);
            else {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          });
        }
        else {
          errors.password = 'Incorrect Password';
          return res.status(400).json(errors);
        }
      });
    });
  } else {
    const { errors, isValid } = getUserInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }
    const id = req.body.id;
    User.findOne({ _id: id })
    .then(user => {
      if(!user) {
        errors.id = 'User not found or wrong id'
        return res.status(404).json(errors);
      } else if(id === user.id) {
        const payload = {
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          pseudo: user.pseudo,
          email: user.email
        }
        jwt.sign(payload, 'secret', {
          expiresIn: 3600
        }, (err, token) => {
          if(err) console.error('There is some error in token', err);
          else {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        });
      } else {
        errors.password = 'Incorrect Password';
        return res.status(400).json(errors);
      }
    });
  }
});

//---->>>> GET USER <<<<----
router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({
    id: req.user.id,
    nom: req.user.nom,
    prenom: req.user.prenom,
    pseudo: req.user.pseudo,
    email: req.user.email
  });
});

module.exports = router;
