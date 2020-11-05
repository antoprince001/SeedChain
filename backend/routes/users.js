const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../config/passport');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const User = require('../models/userSchema');
const crypto = require('crypto');


// Password verification signature - JWT Token
const signToken = userID =>{
    return JWT.sign({
        iss : "seedToken", //To be changed
        sub : userID
    },"seedToken",{expiresIn : "1800s"});
};

// Register
userRouter.post('/register',async (req,res)=>{

        const hashedPassword = await bcrypt.hash(req.body.password,10);

        const newUser = new User({
            username : req.body.username,
            email    : req.body.email,
            mobileno : req.body.mobileno,
            password : hashedPassword,
            role     : req.body.role,

        });
        newUser.save().then((result)=>{

          res.status(201).json({  msg : role + 'added successfully' } );

        })
          .catch((err) => {
            res.status(422).json({ msg : 'There was an error creating your account'})

          })
    });


// Login
userRouter.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
    if(req.isAuthenticated()){
       const { _id,email,role } = req.user;
       const user = req.user;
       console.log('here');
       const token = signToken(_id);
       res.cookie('access_token',token,{httpOnly: true, sameSite:true});
       res.status(200).json({isAuthenticated : true,user : { email,role }});
     //}
    }
    else
    {
        res.status(422).json({ error : 'Unable to login'});

    }

});

// Logout
userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.clearCookie('access_token');

    res.status(200).json({isAuthenticated : true,user : { email : "",role : "" }});
});

//Authentication verification
userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const { email ,role } = req.user;
    console.log(req.user);
    res.status(200).json({isAuthenticated : true, user : { email,role }});
});

module.exports = userRouter;
