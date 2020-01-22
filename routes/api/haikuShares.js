const express = require('express');
const router = express.Router();
const passport = require('passport');

const HaikuShare = require('../../models/HaikuShare');

//create new Haiku share //tested
router.post('/',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            const newShare = new HaikuShare({
                haikuId: req.body.haikuId,
                creatorId: req.body.creatorId,
                recipientId: req.body.recipientId,
                complete: false,
            });
            newShare.save().then(response => res.json(response));
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