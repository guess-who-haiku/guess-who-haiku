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
                                    .then(() => {
                                        Haiku.findById(req.body.haikuId).then((updatedHaiku) => res.json(updatedHaiku))
                                    })
                                    //.catch((errs) => console.log('Error updating haiku', errs));
                            })
                            .catch(err => {
                                res
                                    .status(500)
                                    .json({ createfailed: "Haiku share failed" });
                            });
                    })
            })
});
  
//update Haiku share
router.patch('/:haikuId',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            Haiku.findById( req.params.haikuId )
                .then(haiku => {
                    haiku.usersSharedWith.forEach(user => {
                        if (user.userId === req.body.userId) {
                            if (req.body.complete != undefined) {
                                user.complete = req.body.complete;
                            }
                            if (req.body.completeTimestamp != undefined) {
                                user.completeTimestamp = req.body.completeTimestamp;
                            }
                            if (req.body.openTimestamp != undefined) {
                                user.openTimestamp = req.body.openTimestamp;
                            }
                        }
                    })
                    haiku.save().then(haiku => res.json(haiku));
                })
                .catch(err => {
                    res.status(500).json({ updatefailed: "Haiku update failed" });
                });
        }
);

module.exports = router;