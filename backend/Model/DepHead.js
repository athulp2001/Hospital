const mongoose =require("mongoose")

const DepHeadData=mongoose.model("depheadDetials",{
    headName:String,
    epolyNumber:String,
    age:String,
    description:String,
    selectDepartment:String,
    image:String,
})

module.exports =DepHeadData