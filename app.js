
/**
 * Module dependencies.
 */

var express = require('express')
  , session = require('express-session')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql')
  , bodyParser = require('body-parser')
  , passport = require('passport');

var app = express();
var port = process.env.PORT || process.env.APP_PORT;

var pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: process.env.DB_CONN
});

global.pool = pool;

//View Setup
app.set('views', './views');
app.set('view engine', 'pug');

//General App Middleware
app.use(express.static("public"));
app.use(session({secret: process.env.PASSPORT_SECRET, resave: false, saveUninitialized: false}));
app.use(bodyParser.urlencoded({ extended: true }));

//Passport Middleware
require("./service/passportService.js").configurePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./routes/indexRoute.js')(app);
require('./routes/userRoute.js')(app, passport);
require('./routes/plantRoute.js')(app);

http.createServer(app).listen(port, function(){
  console.log('Express server listening on port ' + port);
});
