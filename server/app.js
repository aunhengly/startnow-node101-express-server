// import files and packages up here
var express    = require('express');
var bodyParser  = require('body-parser');
var data        = require('./data.json');
var morgan      = require('morgan');

// create your express server below
var app = express();

// add your routes and middleware below
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/data', function(req, res){
    res.status(200).json(data);
});
// finally export the express application
module.exports = app;
