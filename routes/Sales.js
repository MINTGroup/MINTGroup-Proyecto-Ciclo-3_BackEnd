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

router.route('/:id').get((req, res) => {
    Sale.findById(req.params.id)
        .then(sale=> res.json(user))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});
router.route('/delete/:id').delete((req, res) => {
    Sale.findByIdAndDelete(req.params.id)
        .then(() => res.json('Success deleting sale.'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});
router.route('/update/:id').patch((req, res) => {
    Sale.findById(req.params.id)
        .then(sale => {
            sale.productID = req.body.productID;
            sale.sellerID = req.body.sellerID;
            sale.amount = req.body.amount;
            sale.totalValue = req.body.totalValue;
            sale.date = req.body.date;

            sale.save()
                .then(() => res.json('Success updating sale!'))
                .catch(err => res.status(405).json('An error has occurred: ' + err));
        })
        .catch(err => res.status(405).json('An error has occurred: ' + err));
});

module.exports = router;