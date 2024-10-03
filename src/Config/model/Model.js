const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    image:{
        type:Array,
    }
    // token:{
    //     type:String
    // }
})

const user = mongoose.model("User",userSchema)

module.exports=user