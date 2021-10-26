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

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product=> res.json(user))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});
router.route('/delete/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Success deleting product.'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});
router.route('/update/:id').patch((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.productBrand = req.body.productBrand;
            product.productName = req.body.productName;
            product.productModel = req.body.productModel;
            product.productValue = req.body.productValue;
            product.date = req.body.date;

            product.save()
                .then(() => res.json('Success updating product!'))
                .catch(err => res.status(405).json('An error has occurred: ' + err));
        })
        .catch(err => res.status(405).json('An error has occurred: ' + err));
});

module.exports = router;