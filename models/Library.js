const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({

  library: Object

})

module.exports = Library = mongoose.model("Library", LibrarySchema);