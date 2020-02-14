const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userAvatars = ['panda', 'lion', 'bear', 'parrot', 'rabbit', 'sloth', 'llama', 'croc', 'walrus', 'bear2', 'lemur', 'owl', 'penguin', 'camel', 'hippo', 'zebra', 'goat', 'fox', 'raccoon']
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
  avatar: {
    type: String,
    enum: userAvatars,
    default: 'bear'
  },
})

module.exports = User = mongoose.model('User', UserSchema);