exports.defaultSuccess = function(res, message){
  console.log(message);
  res.status(200).json({message: message});
}

exports.defaultError = function(res, message){
  res.status(500).json({error: message});
}

exports.loggedIn = function(req, res, next){
  if(req.user) {
    next();
  } else {
    res.status(403).send();
  }
};

exports.loggedOut = function(req, res, next){
  console.log("INVALID");
  if(req.user){
    res.redirect('/');
  } else {
    next();
  }
}

exports.requireAdmin = function(req, res, next){
  if(req.user) {
    if(req.user.admin){ return next(); }
  }
  res.status(403).send();
}
