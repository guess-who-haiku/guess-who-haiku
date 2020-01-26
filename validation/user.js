const Joi = require('joi');
const parseJoiErrors = require('./util/parseJoiErrors');

module.exports = function validateUser(user) {
  const schema = {
    username: Joi.string().min(5).max(12).required(),
    password: Joi.string().min(6).max(30).required()
  };
  return parseJoiErrors(Joi.validate(user, schema, {
    abortEarly: false
  }));
}