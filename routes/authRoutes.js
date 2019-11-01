const express=require('express');
const router=express.Router();
const passport=require('passport');


router.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}))
router.get('/auth/google/callback',passport.authenticate('google'),(req, res)=>{
    res.redirect('/survey')
});

router.get('/api/currentUser',(req, res)=>{
    res.send(req.user)
})
router.get('/api/logout', async(req, res)=>{
    await req.logOut();
    res.redirect('/')
    
})

module.exports=router;