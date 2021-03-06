var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var userService = require('./userService.js');

exports.configurePassport = function(passport){
  passport.use(new LocalStrategy(
    function(username, password, done){
      userService.getByUsername(username).then(function(user){
        if (!user || user.userID === null){ return done(null, false);}
        if (!bcrypt.compareSync(password, user.password)) { return done(null, false);}
        return done(null, user);
      }).catch(done);
    }
  ));

  passport.serializeUser(function(user, done){
    done(null, user.userID);
  });

  passport.deserializeUser(function(id, done){
    userService.get(id).then(function(user){
      done(null, user);
    }).catch(done);
  });
}
