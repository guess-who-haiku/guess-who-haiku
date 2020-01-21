const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HaikuShareSchema = new Schema({
  haikuId: {
    type: Schema.Types.ObjectId,
    ref: "Haiku"
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  recipientId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  complete: Boolean,
  completeTimestamp: Date,
  openTimestamp: Date
});

module.exports = Tweet = mongoose.model('HaikuShare', HaikuShareSchema);
