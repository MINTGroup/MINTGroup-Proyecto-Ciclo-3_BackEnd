const router = require('express').Router();
let User = require('../models/Users');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('An error has occurred: ' + error));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('Success adding user!'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});

module.exports = router;