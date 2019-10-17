const express=require('express');
const app=express();



app.get('/',(req,res)=>{
    res.send({
        name:'talha'
    })
})








app.listen(process.env.PORT || 5000,()=>{
    console.log('server is running')
})