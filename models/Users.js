const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userName: {
            type:String,
            required:true,
            min:3,
            max:30
        },
        email:{
            type:String,
            required:true,
            min:10,
            max:100
        },
        password:{
            type:String,
            required:true,
            min:6,
        },
        role:{type: String, default:undefined},
        date:{type:Date, default: Date.now()}
    }
    );

const User = mongoose.model('User', userSchema);

module.exports = User;

