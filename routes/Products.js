const router = require('express').Router();
let Product = require('../models/Products');


router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(error => res.status(400).json('An error has occurred: ' + error));
});

router.route('/add').post((req, res) => {
    const productBrand = req.body.productBrand;
    const productName = req.body.productName;
    const productModel = req.body.productModel;
    const productValue = req.body.productValue;
    const date = req.body.date;

    const newProduct = new Product({
        productBrand,
        productName,
        productModel,
        productValue,
        date,
    });

    newProduct.save()
        .then(() => res.json('Success adding new product!'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});

module.exports = router;