
/*
 * GET home page.
 */
module.exports = function(app){

  var plantService = require('../service/plantService.js');

  app.get('/', function(req, res){
    plantService.getAll().then(function(plants){
      res.render('index', {title: "Plants", plants: plants, user: req.user});
    }).catch(function(e){
      console.log(e);
      res.render('index', {title: "Plants", plants: [], user: req.user});
    });
  });
}
