const express = require('express');
const router = express.Router();
const passport = require('passport');

const HaikuShare = require('../../models/HaikuShare');

//create new Haiku share
router.post('/shares',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            const newShare = new HaikuShare({
                creatorId: req.creator,
                recipientId: req.recipient,
                complete: false,
            });

            newShare.save().then(response => res.json(response));
        }
);

//update Haiku share
router.patch('/shares/:id',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            HaikuShare.update(
                { HaikuId: req.params.id },
                { where: { HaikuId: req.params.id } }
            ).then(
                response => res.json(response)
            ).catch( err => {
                res.status(500).json({ updatefailed: "HaikuShare update failed" })
            })
        }
);

//get all shared Haikus created by current user
router.get('/shares',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            HaikuShare.find({ creatorId: req.user.id })
                .then(shares => res.json(shares))
                .catch(err => res.status(404).json({ nosharesfound: "User has not shared any haikus"}));
        }
)

//get all Haikus shared with current user
router.get('/shares/user',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            HaikuShare.find({ recipientId: req.user.id })
                .then(shares => res.json(shares))
                .catch(err => res.status(404).json({ nosharesfound: "No haikus have been shared with this user" }));
        }
)

//get all users this Haiku has been shared with
router.get('/shares/haiku/:id',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            HaikuShare.find({ haikuId: req.params.id })
                .then(shares => res.json(shares))
                .catch(err => res.status(404).json({ nosharesfound: "This haiku has not been shared with anyone" }));
        }
)

module.exports = router;