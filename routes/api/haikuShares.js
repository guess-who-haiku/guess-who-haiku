const express = require('express');
const router = express.Router();
const passport = require('passport');

const Haiku = require('../../models/Haiku');

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