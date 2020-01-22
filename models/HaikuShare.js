const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HaikuShareSchema = new Schema({
  haikuId: {
    type: Schema.Types.ObjectId,
    ref: "Haiku",
    required: true
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  recipientId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  complete: {
    type: Boolean,
    required: true
  },
  completeTimestamp: Date,
  openTimestamp: Date
});

module.exports = Tweet = mongoose.model('HaikuShare', HaikuShareSchema);
