const router = require('express').Router();
let Seller = require('../models/Seller');


router.route('/').get((req, res) => {
    Seller.find()
        .then(sellers => res.json(sellers))
        .catch(error => res.status(400).json('An error has occurred: ' + error));
});

router.route('/add').post((req, res) => {
    const sellerID = req.body.sellerID;
    const sellerName = req.body.sellerName;
    const email = req.body.email;

    const newSeller = new Seller({
        sellerID,
        sellerName,
        email,
    });

    newSeller.save()
        .then(() => res.json('Success adding new seller!'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});

module.exports = router;