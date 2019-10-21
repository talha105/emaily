const mongoose=require('mongoose');
const keys=require('./config/keys');
mongoose.connect(
    keys.mongoURI,
    {useNewUrlParser:true,
     useUnifiedTopology:true
    }
).then(()=>console.log('connected'))
