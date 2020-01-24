const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateUserSignup = require('../../validation/signup');
const validateUserLogin = require('../../validation/login');

// ------------------------------- POST /signup
router.post('/signup', (req, res) => {
  const { errors, isValid } = validateUserSignup(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username, email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      }
      const newUser = new User({
        username,
        email,
        passwordDigest: password
      })

      const saltRounds = 10;
      bcrypt.hash(newUser.passwordDigest, saltRounds)
        .then(hashedPassword => {
          newUser.passwordDigest = hashedPassword;
          return newUser.save()
        })
        .then(user => {
          const { id } = user;

          jwt.sign(id, keys.secretOrKey, { expiresIn: 3600 }, (undefined, token) => {
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
  const { errors, isValid } = validateUserLogin(req.body);
  // debugger;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
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
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
  }
);

module.exports = router;