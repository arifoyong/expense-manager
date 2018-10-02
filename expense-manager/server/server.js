//server/server.js

var express = require('express');
var router = require('./routes/routes.js');
var path = require('path');
var bodyParser = require('body-parser');

var myMongoDB = 'mongodb://mlab_arif:mlabArif4121f@ds119853.mlab.com:19853/expenses'

var app = express();
var mongoose = require('mongoose');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended:false}));


mongoose.connect(myMongoDB, { useNewUrlParser: true });

app.use('/', router);

module.exports=app;