const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const saleSchema = new Schema(
    {
        saleID: {type: String, required: true},
        productID: {type: String, required: true},
        sellerID: {type: String, required: true},
        amount: {type: Number, min: 1, max: 2, default: 1},
        totalValue: {type: Number, required: true, min: 4},
        saleDate: {type: Date, default: Date.now()}
    })

const Sale = mongoose.model('Sales', saleSchema);

module.exports = Sale;