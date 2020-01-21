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
        password
      })

      const saltRounds = 10;
      bcrypt.hash(newUser.password, saltRounds)
        .then(hashedPassword => {
          newUser.password = hashedPassword;
          return newUser.save()
        })
        .then(user => res.json(user), err => console.error(err))
    })
})

// ------------------------------- GET /login
router.post('/login', (req, res) => {
  const { errors, isValid } = validateUserLogin(req.body);

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

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          debugger;
          if (isMatch) {
            const { id, username, email } = user;

            const payload = { id, username, email };

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (undefined, token) => {
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

module.exports = router;