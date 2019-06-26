const bcrypt = require('bcrypt');
var User = require('../models/queries/users');

module.exports = function(passport, LocalStrategy){
    passport.serializeUser(function(user, done) {
      done(null, user);
    });
    
    passport.deserializeUser(function(user, done) {
      done(null, user);
    });
    
    passport.use(new LocalStrategy({
        passReqToCallback: true
    },
      function(req, username, password, done) {
        User.getUserByUsername(username)
        .then((user) => {
          if (!user) { return done(null, false, req.flash("authMessage", 'Incorrect username.')) }
          if (bcrypt.compareSync(password, user.password) == false) { return done(null, false, req.flash("authMessage", 'Incorrect password.'))}
          return done(null, user);
        })
        .catch((error) =>  done(null, false, req.flash("authMessage", 'User not found.')));
      }
    ));
};