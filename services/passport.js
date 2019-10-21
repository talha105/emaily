const passport = require('passport');
const googleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys')

const user=require('../model/users')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    const existingUser= await user.findById(id)
    done(null,existingUser)
})

passport.use(new googleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback',
    proxy:true
},async (accesToken,refeshToken,profile,done)=>{

    const existingUser= await user.findOne({googleId:profile.id})
    if(existingUser){
        done(null,existingUser)
    }
    else{
        const newUser= await new user({googleId:profile.id}).save()
        done(null,newUser)
    }
 
}
)
)