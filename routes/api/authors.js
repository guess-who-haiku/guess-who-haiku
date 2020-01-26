const express = require("express");
const router = express.Router();
const passport = require("passport");

const Author = require("../../models/Author");
const Library = require("../../models/Library")

router.get(
  "/",
  (req, res) => {
    Library.find()
      .then(payload => {
        let authors = (Object.keys(payload[0]["library"]));
        res.json(authors)
      })
      .catch(err => res.status(404).json({ noauthorsfound: err }));
  }
);


module.exports = router;
