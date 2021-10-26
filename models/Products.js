const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        productBrand:{type:String, required:true, min:3, max:30},
        productName:{
            type:String,
            required:true,
            min:10,
            max:100
        },
        productModel:{
            type:Number,
            required:true,
            min:4
        },
        productValue:{
            type: String,
            required:true,
            min: 4,
            max: 6
        },
        date:{
            type:Date,
            default: Date.now
        }
    }

)

const Products = mongoose.model('Products', productSchema);

module.exports = Products;