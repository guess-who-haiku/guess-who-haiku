const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  passwordDigest: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  score: {
    type: Number,
    default: 0
  },
  haikusCreated: {
    type: Array,
    default: []
  },
  haikusSharedWith: {
    type: Array,
    default: []
  },
})

module.exports = User = mongoose.model('User', UserSchema);