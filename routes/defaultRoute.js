module.exports = function(app){
  app.use(function(req, res, next){
    res.status(404);

    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
  });
}
