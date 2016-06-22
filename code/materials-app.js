var config 			= require('./config.js');
var DB 				= require('./db/db.js');
var exports 		= module.exports = {};

var express 		= require('express');
var bodyParser 		= require('body-parser');
var request 		= require('request');

var apiV1          	= require('./routes/api/v1/api.js');

var app 			= express();

DB.con.connect(function(err){
    if(err){ res.send(err); return; }
});

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// routes ====================================================================

app.use('/api/v1', apiV1.router);

app.use('/', express.static(__dirname + '/public/app'));

// catch 404 and forward to error handler
app.use(function(req, res, next){
	res.status(404);

	// respond with html page
	if (req.accepts('html')) {
	    res.setHeader('Content-Type', 'text/html');
		res.send('Not Found');
		return;
	}

	// respond with json
	if (req.accepts('json')) {
	    res.setHeader('Content-Type', 'application/json');
		res.send({ error: 'Not found' });
		return;
	}

	// default to plain-text. send()
	res.send('Not found');
});


var server = app.listen(config.web.port, config.web.host, function () {
	console.log(config.web.host);
});

exports.closeServer = function(){
	DB.con.end();
	server.close();
};