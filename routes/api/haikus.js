const express = require("express");
const router = express.Router();
const passport = require("passport");

const Haiku = require("../../models/Haiku");
const User = require("../../models/User");
const ObjectId = require("mongodb").ObjectID;
const Library = require('../../models/Library');

const MarkovUtil = require("../../markov");
const ExtAPIUtil = require('../../externalAPI');


async function getAuthorSelection(authors) {

  const payload = await Library.find();
  const library = payload[0].library;
  console.log('library', library);
  /* goes through each others and returns a selection with just the authors */
  
  let selection = {};

  for (let author of authors) {
    if (!(author in library)) {
      throw "Author not in library"
    } else {
      selection[author] = library[author];
    }
  }
  return selection;
}

// returns new haiku body based on the selections given, no save to db

router.get('/new',

  (req, res) => {

    const authors = Object.values(req.query); /* get authors from request  */
    console.log('AUTHORS', authors)
    // for each author, assemble a selection of authors from the library and construct the dictionary
    selection = getAuthorSelection(authors);
    console.log('SELECTION', selection)
    selectionDicts = MarkovUtil.generateDictionaries(selection);
    
    // use the selection dictionaries to generate haiku lines
    let lines = MarkovUtil.generateLines(selectionDicts);

    /* return haiku body */
    res.json(lines);

  }
);

// fetches haiku challenges
router.get("/challenges",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let haikus = Object.values(req.query);
    Haiku.find({
      _id: { $in: haikus }
    })
      .then(haikus => res.json(haikus))
      .catch(err =>
        res.status(404).json({ noHaikuError: "No challenged haikus found" })
      )
  }
);


// fetch haiku for a single haiku id
router.get("/:haikuId",

  (req, res) => {
    Haiku.findById(req.params.haikuId)
      .then(payload => {
        res.json(payload)}
      )
      .catch(err => res.status(404).json({ noHaikuError: "No haiku by that id exists" }))
  }

);

// fetches haikus for a single user 

router.get("/user/:userId",

  (req, res) => {

    Haiku.find({ creator: req.params.userId })
      .then(payload => {

        const haikus = {}
        payload.map((haiku) => haikus[haiku._id] = haiku)
        res.json(haikus)
        })
      .catch(err => res.status(404).json({ noHaikuError: "No haiku by that id exists" }))
  }

);


// creates new haiku based on the selections given, save to db

router.post('/create', 
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    let { body, creator, usersSharedWith } = req.body;

    //make the new haiku
    const newHaiku = new Haiku({
      creator: creator,
      body: body, 
      usersSharedWith: usersSharedWith
    })

    let haikuId = ""; 
    let creatorId = "";

    newHaiku
      .save()
      .then( haiku => { 

        haikuId = haiku._id;
        creatorId = haiku.creator;

        res.json(haiku) /* respond to client */
      })
      .then(() => {

        const query = { "_id": creatorId }
        const update = {
          "$push" : {
            "haikusCreated": haikuId
          } 
        }

        User.updateOne(

          query,
          update

        ).catch( err => console.error(`failed to update`))
    });      
})

router.delete('/:id',

  (req, res) => {

      User.updateMany(
        { haikusCreated: ObjectId(req.params.id) },
        { $pull: { haikusCreated: ObjectId(req.params.id) } },
        function(err, obj) {
          if (err) throw err;
          console.log("updated haikus created", obj);
        }
      );

      User.updateMany(
        { haikusSharedWith: req.params.id },
        { $pull: { haikusSharedWith: req.params.id } },
        function(err, obj) {
          if (err) throw err;
          console.log("updated shared with", obj);
        }
      );

      Haiku.deleteOne({ _id: req.params.id }, function(err, obj) {
        if (err) throw err;
        console.log("deleted", obj);
      }).then(obj => res.json(obj))
    }

)

module.exports = router;