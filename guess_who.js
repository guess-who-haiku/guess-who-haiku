const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");

const haikuShares = require("./routes/api/haikuShares");
const authors = require("./routes/api/authors");
const path = require('path');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.error(err));

//Configure for Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
} else {
  app.get("/", (req, res) => res.send("Guess Who?"));
}


// Configure passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Configure bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure multer middleware
// app.use( multer(
//   {
//     dest: './uploads',
//     rename: function(fieldname, filename) {
//       return filename;
//     }
//   }
// ));

app.use('/api/users', users);
app.use('/api/shares', haikuShares);
app.use('/api/authors', authors);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));