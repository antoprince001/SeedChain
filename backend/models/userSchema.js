const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username : {
                type: String,
                required : true,
                trim : true,
                minlength : 3,
                maxlength : 15
            },
    email : {
                type: String,
                required : true,
                unique : true,
                trim : true,
                minlength : 3
            },
    role : {
                type: String,
                required : true,
                trim : true,
            },
    password: {
                type: String,
                required: true
              },
    },
    {
        collection: 'userDetails',
        unique: 'true'
    });


UserSchema.methods.comparePassword = function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null,isMatch,{ message : 'Invalid password for the account !'});
            return cb(null,this);
        }
    });
}

module.exports = mongoose.model('User',UserSchema);
