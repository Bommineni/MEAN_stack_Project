/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

//loading authentication modules
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

var mongoose = require("mongoose");
var connectionString = 'mongodb://localhost:27017/webdev';
mongoose.connect(connectionString,{ useMongoClient: true });
console.log("connectmongoose");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));


// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const api = require('./server/router/api');

app.use('/api',api);


const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

var serverSide = require("./server/test-mongodb/app");
var serverSide1 = require("./server/app");
serverSide1(app);
serverSide(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


server.listen( port , () => console.log('Running'));

