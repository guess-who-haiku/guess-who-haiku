const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HaikuShareSchema = new Schema({

  haikuId: Number,
  creatorId: Number,
  recipientId: Number,
  complete: Boolean,
  completeTimestamp: Date,
  openTimestamp: Date

});

module.exports = Tweet = mongoose.model('HaikuShare', HaikuShareSchema);
