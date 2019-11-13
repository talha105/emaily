const moongoose=require('mongoose');

const userSchema= new moongoose.Schema({
    googleId:String,
    credit:{
        type:Number,
        default:0
    }
});

moongoose.model('users',userSchema)