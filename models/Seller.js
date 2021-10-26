const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const sellerSchema = new Schema(
    {
        sellerID: {type:String, required:true, min:3, max:30},
        sellerName: {type:String, required:true, min:3, max:30},
        email:{type:String, required:true, min:10, max:100},
    }
)

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
