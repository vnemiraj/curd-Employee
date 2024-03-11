const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    designation:{
        type:String
    },
    gender:{
        type:String
    },
    course:{
        type:String
    },
    imgUpload:{
        type:String
    }
})

const Employee = mongoose.model("Employees", employeeSchema);
module.exports = Employee;