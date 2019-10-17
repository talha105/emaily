const express=require('express');
const app=express();



app.get('/',(req,res)=>{
    res.send('hellow')
})








app.listen(process.env.PORT || 5000,()=>{
    console.log('server is running')
})