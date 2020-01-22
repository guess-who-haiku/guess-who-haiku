const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HaikuSchema = new Schema({

  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  body: [ 
          { author1: String, text: Array },
          { author2: String, text: Array }, 
          { author3: String, text: Array }
        ],
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tweet = mongoose.model('Haiku', HaikuSchema);
