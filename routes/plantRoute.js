var shared = require("./sharedRoute.js");
var plantService = require("../service/plantService.js");

module.exports = function(app, passport){
  app.get('/plants/add', shared.requireAdmin, function(req, res){
    res.render('plants/add');
  });

  app.post('/plants/add', shared.requireAdmin, function(req, res){
    plantService.addPlant(req.body, function(err, results){
      if(err){ console.log(err); }
      return shared.defaultRedirect(res);
    });
  });
}
