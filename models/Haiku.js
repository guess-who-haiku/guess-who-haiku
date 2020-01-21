const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HaikuSchema = new Schema({

  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  body: [ 
          { author1: String, text: String },
          { author2: String, text: String }, 
          { author3: String, text: String }
        ],
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tweet = mongoose.model('Haiku', HaikuSchema);
