var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var userService = require('./userService.js');

exports.configurePassport = function(passport){
  passport.use(new LocalStrategy(
    function(username, password, done){
      userService.getByUsername(username, function(err, userObject){
        if (err){ return done(err); }
        if (!userObject){ return done(null, false); }
        if (!bcrypt.compareSync(password, userObject.password)) { return done(null, false);}
        return done(null, userObject);
      });
    }
  ));

  passport.serializeUser(function(user, done){
    done(null, user.user_id);
  });

  passport.deserializeUser(function(id, done){
    userService.get(id, done);
  });
}
