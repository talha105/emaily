const express=require('express');
const router=express.Router();
const keys=require('../config/keys')
const stripe=require('stripe')(keys.stripeSecret)
const requireLogin =require('../middleware/requireLogin')
router.post('/api/stripe', requireLogin, async(req, res)=>{
    const charge= await stripe.charges.create({
        amount:500,
        currency:'usd',
        description:'5$ for 5 credit',
        source:req.body.id

    })    
    req.user.credit +=5
    const user = await req.user.save();
    res.send(user)

})















module.exports=router;