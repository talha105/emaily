const express=require('express');
const app=express();
// require('./mongoose')
// const cookieSession=require('cookie-session');
// const keys=require('./config/keys')
// const passport=require('passport');
// require('./services/passport');
// app.use(cookieSession({
//     maxAge:30*24*60*60*1000,
//     keys:[keys.cookieKey]
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(require('./routes/authRoutes'));


app.get('/',(req,res)=>{
 res.send({
     name:'talha'
 })
})






app.listen(process.env.PORT || 5000,()=>{
    console.log('server is running')
})