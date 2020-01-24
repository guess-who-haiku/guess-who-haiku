const express = require("express");
const router = express.Router();
const passport = require("passport");

const Author = require("../../models/Author");
const Library = require("../../models/Library")

// ------------------------------- GET /
// router.get(
//   "/",
//   (req, res) => {
//     Author.find()
//       .then(authors => res.json(authors))
//       .catch(err => res.status(404).json({ noauthorsfound: "No authors found" }));
//   }
// );

router.get(
  "/",
  (req, res) => {
    Library.find()
      .then(authors => res.json(authors))
      .catch(err => res.status(404).json({ noauthorsfound: "No authors found in library" }));
  }
);


module.exports = router;
