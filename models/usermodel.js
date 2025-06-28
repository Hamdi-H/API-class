const mongoose = require('mongoose');  //this is how you import in node js
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
});

userSchema.pre('save',async function(next){
try{
    const salt = await bcrypt.genSalt(10)
    const hashedpwd = await bcrypt.hash(this.password, salt)
    this.password = hashedpwd
    next()
} catch(error){
    next(error)
}
});

userSchema.methods.isValidPassword = async function(password) {
    try{
  return await bcrypt.compare(password, this.password);
    }catch(err){
        throw err;
    }
};


const user = mongoose.model('user',userSchema);
module.exports=user;