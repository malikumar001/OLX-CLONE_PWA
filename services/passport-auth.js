const passport = require("passport");
//passport give idea to express how to handle authentication.
const googleStrategy = require("passport-google-oauth20").Strategy;
//use to instruct passport how to auth user using google.
const mongoose = require("mongoose");

const keys = require("../config/keys");

const User = mongoose.model("Users");


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //this is the url where the user will send after grant Permission
      proxy: true 
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleId: profile.id
      })
      if (existingUser) {
        
        done(null, existingUser);

      } else {
        const user = await new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          profilePhoto: profile.photos[0].value
        })
          .save()
        done(null, user);
      }
    }
  )
);



//Code with promises

  // if (existingUser) {
  //   //thats fine and stop adding record.
  //   done(null, existingUser);
  // } else {
  //   //here calling done is not easy first we need to check that the user is saving successfully.as below is the asenchornous operation so we need to use promise
  //   new User({
  //     googleId: profile.id,
  //     name: profile.displayName,
  // email:profile.emails[0].value
  //   })
  //     .save() // this create a new model instance
  //     .then(user => done(null, user)); // this is another instance but both are same.
  // }