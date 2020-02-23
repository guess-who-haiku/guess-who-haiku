const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateUser = require('../../validation/user');
const userAvatars = require('../../userAvatars');

// ------------------------------- POST /signup
router.post('/signup', (req, res) => {
  const { errors, isValid } = validateUser(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (user) {
        errors.username = 'Username already exists';
        return res.status(400).json(errors);
      }

      const newUser = new User({
        username,
        passwordDigest: password,
        avatar: userAvatars[Math.floor(Math.random() * userAvatars.length)]
      });

      const saltRounds = 10;

      bcrypt.hash(newUser.passwordDigest, saltRounds)
        .then(hashedPassword => {
          newUser.passwordDigest = hashedPassword;
          return newUser.save()
        })
        .then(user => {
          const { id: _id, username, avatar, score, haikusCreated, haikusSharedWith } = user
          jwt.sign({ username, score, haikusCreated, haikusSharedWith, avatar, _id }, keys.secretOrKey, { expiresIn: '5 days' }, (undefined, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            })
          });

        }, err => console.error(err));
    })
})

// ------------------------------- GET /login
router.post('/login', (req, res) => {
  const errors = {};

  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        errors.username = 'Username does not exist';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.passwordDigest)
        .then(isMatch => {
          if (isMatch) {
            jwt.sign({ _id: user.id }, keys.secretOrKey, { expiresIn: 3600 }, (undefined, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`
              })
            })
          } else {
            errors.password = 'Invalid password'
            return res.status(400).json(errors);
          }
        });
    });

});

// ------------------------------- GET /
router.get("/",
  (req, res) => {
    User.find(undefined, '_id avatar username score haikusCreated haikusSharedWith')
      .then(payload => {
        const users = {};
        payload.map(user => (users[user._id] = user));
        res.json(users);
      })
      .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
  }
);

module.exports = router;