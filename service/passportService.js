var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var userService = require('./userService.js');

exports.configurePassport = function(passport){
  passport.use(new LocalStrategy(
    function(username, password, done){
      userService.getByUsername(username, function(err, user){
        if (err){ return done(err); }
        if (!user){ return done(null, false); }
        if (!bcrypt.compareSync(password, user.password)) { return done(null, false);}
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done){
    done(null, user.userID);
  });

  passport.deserializeUser(function(id, done){
    userService.get(id, function(err, user){
      if(err){ return done(err);}
      done(null, user);
    });
  });
}
