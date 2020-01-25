const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HaikuSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  body: Object,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  usersSharedWith: [ 
    {
      userId: String,
      complete: {
        type: Boolean,
        default: false
      },
      completeTimestamp: Date,
      openTimestamp: Date
    }
  ]

});

module.exports = Tweet = mongoose.model('Haiku', HaikuSchema);
