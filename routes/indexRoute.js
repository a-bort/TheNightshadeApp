
/*
 * GET home page.
 */
module.exports = function(app){

  var plantService = require('../service/plantService.js');

  app.get('/', function(req, res){
    plantService.getAll(function(err, plants){
      if(err || !plants){
        console.log(err);
      }
      res.render('index', {title: "Plants", plants: plants, user: req.user});
    });
  });
}
