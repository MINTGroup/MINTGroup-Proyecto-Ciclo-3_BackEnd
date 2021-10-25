const router = require('express').Router();
let User = require('../models/Sales');


router.route('/').get((req, res) => {
    User.find()
        .then(sales => res.json(sales))
        .catch(error => res.status(400).json('An error has occurred: ' + error));
});

router.route('/add').post((req, res) => {
    const saleID = req.body.saleID;

    const newSale = new Sale({saleID});

    newSale.save()
        .then(() => res.json('Success adding user!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;