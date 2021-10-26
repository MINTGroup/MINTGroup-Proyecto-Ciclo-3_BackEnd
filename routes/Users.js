const router = require('express').Router();
let User = require('../models/Users');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('An error has occurred: ' + error));
});

router.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const date = Date.parse(req.body.date);

    const newUser = new User({
        userName,
        email,
        password,
        role,
        date,
    });


    newUser.save()
        .then(() => res.json('Success adding new user!'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});

module.exports = router;