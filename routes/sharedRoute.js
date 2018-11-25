var userService = require("../service/userService.js");

exports.defaultRedirect = function(res){
  res.redirect('/')
}

exports.loggedIn = function(req, res, next){
  if(req.user) {
    next();
  } else {
    res.redirect('/');
  }
};

exports.loggedOut = function(req, res, next){
  if(req.user){
    res.redirect('/');
  } else {
    next();
  }
}

exports.requireAdmin = function(req, res, next){
  if(req.user) {
    if(req.user.admin){ next(); }
    else { res.redirect('/'); }
  } else {
    res.redirect('/');
  }
}
