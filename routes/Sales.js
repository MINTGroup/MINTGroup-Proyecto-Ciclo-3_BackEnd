const router = require('express').Router();
let Sale = require('../models/Sales');


router.route('/').get((req, res) => {
    Sale.find()
        .then(sales => res.json(sales))
        .catch(error => res.status(400).json('An error has occurred: ' + error));
});

router.route('/add').post((req, res) => {
    const productID = req.body.productID;
    const sellerID = req.body.sellerID;
    const amount = req.body.amount;
    const totalValue = req.body.totalValue;
    const date = req.body.date;

    const newSale = new Sale({
        productID,
        sellerID,
        amount,
        totalValue,
        date,
    });

    newSale.save()
        .then(() => res.json('Success adding new sale!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;