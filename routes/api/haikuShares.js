const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../../models/User');
const Haiku = require('../../models/Haiku');

//create new Haiku share //tested
router.post('/',
  // passport.authenticate('jwt', { session: false }),
  async function(req, res) {

    let recipientIds = req.body.recipientIds;

    try {

      for (let i = 0; i < recipientIds.length; i++) {

        let userId = recipientIds[i];
        
        await User.updateOne(
          { "_id": userId },
          {"$addToSet": { "haikusSharedWith": req.body.haikuId }},
          function(err) {
            if (err) throw err;
          }
        )

        let haiku = await Haiku.findById(req.body.haikuId)

        await Haiku.updateOne(
          { "_id": haiku._id },
          { "$addToSet": { "usersSharedWith": { userId: userId } } }
        )

      }

    } catch (error) {
      console.log('errors with haiku share', error);
      res.status(500).json({ createfailed: "Haiku share failed" });
    }

    Haiku.findById(req.body.haikuId)
      .then(updatedHaiku => {
        res.json(updatedHaiku)
      });
  }
);

//update Haiku share
router.patch('/:haikuId',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            let score = 0;
            Haiku.findById( req.params.haikuId )
                .then(haiku => {
                    haiku.usersSharedWith.forEach(user => {
                        if (user.userId === req.body.userId) {
                            if (req.body.complete) {
                                user.complete = req.body.complete;
                            }
                            if (req.body.completeTimestamp) {
                                user.completeTimestamp = req.body.completeTimestamp;
                                let timeDiff =
                                  (req.body.completeTimestamp - user.openTimestamp)/1000;
                                score = 2000 - (2000*timeDiff/(2000 + timeDiff)) + 100;
                            }
                            if (req.body.openTimestamp) {
                                user.openTimestamp = req.body.openTimestamp;
                            }
                        }
                    })
                    haiku.save().then(haiku => res.json(haiku));
                })
                .then(() => {
                    if (req.body.completeTimestamp != undefined) {
                        User.findById(req.body.userId)
                        .then(user => {
                            user.score += score;
                            user.save();
                        })
                        .catch(err => {
                            res
                              .status(500)
                              .json({ updatefailed: "User score update failed" });
                        })
                    }
                })
                .catch(err => {
                    res.status(500).json({ updatefailed: "Haiku update failed" });
                });
        }
);

module.exports = router;