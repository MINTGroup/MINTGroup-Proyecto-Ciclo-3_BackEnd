const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        productName:{type:String, required:true, min:3, max:30},
        productBrand:{
            type:String,
            required:true,
            min:10,
            max:100
        },
        productReleaseYear:{
            type:String,
            required:true,
            min:4,
            max:4
        },
        productValue:{
            type: Number,
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