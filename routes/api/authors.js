const express = require("express");
const router = express.Router();
const passport = require("passport");

const Author = require("../../models/Author");

// ------------------------------- GET /
router.get(
  "/",
  (req, res) => {
    Author.find()
      .then(authors => res.json(authors))
      .catch(err => res.status(404).json({ noauthorsfound: "No authors found" }));
  }
);

module.exports = router;
