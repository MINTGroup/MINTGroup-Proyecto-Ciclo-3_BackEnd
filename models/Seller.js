const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const sellerSchema = new Schema(
    {
        sellerName: {type:String, required:true, min:3, max:30},
        email:{type:String, required:true, min:10, max:100},
        password:{type:String, required:true, min:6,},
        role:{type: String, required:true}
    }
)

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
