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

router.route('/:id').get((req, res) => {
    Seller.findById(req.params.id)
        .then(seller => res.json(user))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});
router.route('/delete/:id').delete((req, res) => {
    Seller.findByIdAndDelete(req.params.id)
        .then(() => res.json('Success deleting seller.'))
        .catch(err => res.status(400).json('An error has occurred: ' + err));
});
router.route('/update/:id').patch((req, res) => {
    Seller.findById(req.params.id)
        .then(seller => {
            seller.sellerID = req.body.sellerID;
            seller.sellerName = req.body.sellerName;
            seller.email = req.body.email;

            seller.save()
                .then(() => res.json('Success updating seller!'))
                .catch(err => res.status(405).json('An error has occurred: ' + err));
        })
        .catch(err => res.status(405).json('An error has occurred: ' + err));
});

module.exports = router;