const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateUser = require('../../validation/user');

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
        passwordDigest: password
      })

      const saltRounds = 10;
      bcrypt.hash(newUser.passwordDigest, saltRounds)
        .then(hashedPassword => {
          newUser.passwordDigest = hashedPassword;
          return newUser.save()
        })
        .then(user => {
          jwt.sign({ userId: user.id }, keys.secretOrKey, { expiresIn: 3600 }, (undefined, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            })
          })
          // res.json(user)
        }, err => console.error(err))
    })
})

// ------------------------------- GET /login
router.post('/login', (req, res) => {
  const { errors, isValid } = validateUser(req.body);
  // debugger;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        errors.username = 'User not found';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.passwordDigest)
        .then(isMatch => {
          if (isMatch) {
            jwt.sign({ userId: user.id }, keys.secretOrKey, { expiresIn: 3600 }, (undefined, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`
              })
            })
          } else {
            errors.password = 'Incorrect password'
            return res.status(400).json(errors);
          }
        })
    })

})

// ------------------------------- GET /
router.get("/",
  (req, res) => {
    User.find(undefined, '_id username score haikusCreated haikusSharedWith')
      // .then(users => res.json(users))
      .then(payload => {
        const users = {};
        payload.map(user => (users[user._id] = user));
        res.json(users);
      })
      .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
  }
);

module.exports = router;