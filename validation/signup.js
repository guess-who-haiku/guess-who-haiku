const Joi = require('joi');
const parseJoiErrors = require('./util/parseJoiErrors');

module.exports = function validateUserSignup(user) {
  const schema = {
    username: Joi.string().min(5).max(20).required(),
    email: Joi.string().min(5).max(40).required().email(),
    password: Joi.string().min(6).max(30).required(),
    // password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
  };
  return parseJoiErrors(Joi.validate(user, schema, {
    abortEarly: false
  }));
}