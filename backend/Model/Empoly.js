const mongoose =require("mongoose")

const EmpolyData = mongoose.model("epolydetials",{
    name:String,
    employeNumber:String,
    age:String,
    decription:String,
    selectDepartment:String,
    reportTo:String,
    image:String,
})

module.exports=EmpolyData