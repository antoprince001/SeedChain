// Implementation of passport js strategies

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy;
const User = require('../models/userSchema');


const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
        console.log(token);
    }
    return token;
}

// Authorization for requests
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "seedToken"
},(payload,done)=>{
    User.findById({_id : payload.sub},(err,user)=>{
      console.log(payload);
        if(err)
        {
           console.log(err)
            done(err,false);

        }
        if(user)
        {
              console.log(user)
              done(null,user);
        }
        else
        {
            done(null,false);
        }
    });
}));


// Authenticated local strategy using email and password
passport.use(new LocalStrategy((email,password,done)=>{
    User.findOne({email},(err,user)=>{
        // something went wrong with database
        if(err)
            return done(err,{ message : 'There was error connecting to the database !'});
        // if no user exist
        if(!user)
            return done(null,false,{ message : 'User does not exists !'});
        // check if password is correct
        user.comparePassword(password,done);
    });
}));



// passport.use( new HeaderAPIKeyStrategy(
//     { header: 'x-api-key', prefix: '' },
//     false,
//     function(apikey, done) {
//       User.findOne({ apikey: apikey }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));


passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
