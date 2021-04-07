const express=require('express')
const authRoutes=express.Router();// we just got the Router function from express
const User=require('../models/user')




authRoutes.post('/signup',async(req,res)=>{
    const user=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    // save the user
    const savedUser=await user.save();
    res.send(savedUser);// it awaits until user get saved and display the save user

    res.send('it is working fine');

})
module.exports=authRoutes;