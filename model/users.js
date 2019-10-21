const moongoose=require('mongoose');

const userSchema= new moongoose.Schema({
    googleId:String
});

module.exports=moongoose.model('users',userSchema)