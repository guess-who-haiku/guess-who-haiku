const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HaikuSchema = new Schema({

  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  body: Object,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  usersSharedWith: {
    type: Array,
    default: []
  }

});

module.exports = Tweet = mongoose.model('Haiku', HaikuSchema);

// 1 author scenario
// 2 author scenario - first two lines of one, the last line of another
// 3 author scenario - first line of 1, second line of 2 and 3rd line of 3

