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

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});
router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Success deleting user.'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});
router.route('/update/:id').patch((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.userName = req.body.userName;
            user.password = req.body.password;
            user.email = req.body.email;
            user.role = req.body.role;
            user.date = Date.parse(req.body.date);

            user.save()
                .then(() => res.json('Success updating user!'))
                .catch(err => res.status(405).json('An error has occurred: ' + err));
        })
        .catch(err => res.status(405).json('An error has occurred: ' + err));
});
module.exports = router;