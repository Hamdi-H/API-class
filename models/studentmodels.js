const mongoose = require('mongoose');  //this is how you import in node js
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    firstname:{
        type:String,
        required:[true,'firstname is required']
    },
    lastname:{
        type:String,
        required:[true,'lastname is required']
    },
    gender:{
        type:String
    }
});

const student = mongoose.model('student',studentSchema);
module.exports=student;