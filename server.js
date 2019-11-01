const express=require('express');
const app=express();
require('./mongoose')
const bodyParser=require('body-parser');
const cookieSession=require('cookie-session');
const keys=require('./config/keys')
const passport=require('passport');
require('./services/passport');

app.use(bodyParser.json())
app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes/authRoutes'));
app.use(require('./routes/paymentRoutes'))

if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}







app.listen(process.env.PORT || 5000,()=>{
    console.log('server is running')
})