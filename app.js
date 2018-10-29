
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql');

var app = express();
var port = process.env.APP_PORT;

var pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: process.env.DB_CONN
});

app.set('views', './views');
app.set('view engine', 'pug');

require('./routes/index.js')(app, pool);

http.createServer(app).listen(port, function(){
  console.log('Express server listening on port ' + port);
});
