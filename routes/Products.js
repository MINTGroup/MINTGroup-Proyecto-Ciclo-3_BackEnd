const router = require('express').Router();
let User = require('../models/Products');


router.route('/').get((req, res) => {
    User.find()
        .then(products => res.json(products))
        .catch(error => res.status(400).json('An error has occurred: ' + error));
});

router.route('/add').post((req, res) => {
    const productName = req.body.productName;

    const newProduct = new Product({productName});

    newProduct.save()
        .then(() => res.json('Success adding new product!'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});

module.exports = router;