const mongoose =require("mongoose")

const FormData = mongoose.model('FormData', {
    name:String,
    year:String,
    description:String,
    image:String,
  });


module.exports =FormData

