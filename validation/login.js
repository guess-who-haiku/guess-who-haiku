const Joi = require('joi');
const parseJoiErrors = require('./util/parseJoiErrors');

module.exports = function validateUserLogin(user) {
  const schema = {
    email: Joi.string().min(5).max(40).required().email(),
    password: Joi.string().min(6).max(30).required()
  };
  return parseJoiErrors(Joi.validate(user, schema, {
    abortEarly: false
  }));
}