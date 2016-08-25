var express = require ('express');
var bodyParser = require ('body-parser');
var logger = require ('morgan');

// probably going to use mysql
// var mongojs = require ('mongojs');

var app = express();
var PORT = process.env.PORT || 3000;

// mogan logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

// ------------------------
// main route with redirect
app.get('/', function(req, res) {
	res.sendFile('./public/index.html');
});


//listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});