//This file is not useful    non-working feature

var  FacebookStrategy = require('passport-facebook').Strategy;
var User              = require('../models/user');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(app,passport){
     
     passport.use(new FacebookStrategy({
            clientID: "22",
            clientSecret: "FACEBOOK_APP_SECRET",
            callbackURL: "http://www.example.com/auth/facebook/callback"
            
        },
        function(accessToken, refreshToken, profile, done) {
            // User.findOrCreate(..., function(err, user) {
            // if (err) { return done(err); }
            // done(null, user);
           // });
           done(null,profile);
        }

        ));

    return passport;
}





