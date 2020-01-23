const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../../models/User');
const Haiku = require('../../models/Haiku');

//create new Haiku share //tested
router.post('/',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            req.body.recipientIds.forEach(userId => {
                User.findById(userId)
                    .then(user => {
                        User.updateOne(
                            { "_id": user._id },
                            {"$push": { "haikusSharedWith": req.body.haikuId }})
                            //.catch((errs) => console.log('Error updating User', errs))
                    })
                    .then(() => {
                        Haiku.findById(req.body.haikuId)
                            .then(haiku => {
                                Haiku.updateOne(
                                    { "_id": haiku._id },
                                    { "$push": { "usersSharedWith": { userId: userId } }})
                                    .then(() => res.json(haiku))
                                    //.catch((errs) => console.log('Error updating haiku', errs));
                            })
                            .catch(err => {
                                res
                                    .status(500)
                                    .json({ createfailed: "Haiku share failed" });
                            });
                    })
            })
            
        }
);

//update Haiku share //tested
router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            HaikuShare.updateOne(
              { _id: req.params.id },
              {
                creatorId: req.body.creatorId,
                recipientId: req.body.recipientId,
                complete: req.body.complete,
                completeTimestamp: req.body.completeTimestamp,
                openTimestamp: req.body.openTimestamp
              }
            )
              .then(response => res.json(response))
              .catch(err => {
                res
                  .status(500)
                  .json({ updatefailed: "HaikuShare update failed" });
              });
        }
);

//get all shared Haikus created by current user //hasn't been tested
router.get('/',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            HaikuShare.find({ creatorId: req.user.id })
                .then(shares => res.json(shares))
                .catch(err => res.status(404).json({ nosharesfound: "User has not shared any haikus"}));
        }
)

//get all Haikus shared with current user //hasn't been tested
router.get('/user',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            HaikuShare.find({ recipientId: req.user.id })
                .then(shares => res.json(shares))
                .catch(err => res.status(404).json({ nosharesfound: "No haikus have been shared with this user" }));
        }
)

//get all users this Haiku has been shared with //tested
router.get('/haiku/:id',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            HaikuShare.find({ haikuId: req.params.id })
                .then(shares => res.json(shares))
                .catch(err => res.status(404).json({ nosharesfound: "This haiku has not been shared with anyone" }));
        }
)

module.exports = router;