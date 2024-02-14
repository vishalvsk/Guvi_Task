const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
   email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    resetToken:String,
     expireToken:Date,
        
    
})
const userModel = mongoose.model("userSchema",userSchema,"user");
module.exports = userModel;