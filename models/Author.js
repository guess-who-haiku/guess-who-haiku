const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

  name: String,
  authorImage: String
  
});

module.exports = Tweet = mongoose.model('Author', AuthorSchema);