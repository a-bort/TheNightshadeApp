
/*
 * GET users listing.
 */
var shared = require("./sharedRoute.js");

 module.exports = function(router, passport){

   var userService = require('../service/userService.js');

   router.post('/register', function(req, res){
     var username = req.body.username;
     var password = req.body.password;
     var passwordConfirm = req.body.password_confirm;
     if(!username || !password || !passwordConfirm){
       res.redirect('/register?error=' + encodeURIComponent("No username/password/confirmation entered") + "&message=" + encodeURIComponent("User not created"));
     } else if(password != passwordConfirm){
       res.redirect('/register?error=' + encodeURIComponent("Password and confirmation do not match") + "&message=" + encodeURIComponent("User not created"));
     }  else {
       userService.register(username, password)
       .then(function(user){
         req.login(user, function(err){
           if(err) { console.log(err); }
           res.redirect('/');
         });
       }).catch(function(e){
         console.log(e);
         res.redirect('/register?error=' + encodeURIComponent("Exception creating user") + "&message=" + encodeURIComponent("User not created"));
       });
     }
   });

   router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res){
      res.redirect('/');
    });

    router.get('/logout', function(req, res){
      var ret = req.query.return || "/";
      req.logout();
      res.redirect(ret);
    });
 }
