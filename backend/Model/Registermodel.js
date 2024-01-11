const mongoose=require("mongoose")

const regSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"visitor"
    }
})

const registerModel= mongoose.model("register",regSchema)

module.exports=registerModel;