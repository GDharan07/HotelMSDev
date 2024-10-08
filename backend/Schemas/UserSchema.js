const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('userSchema',userSchema)