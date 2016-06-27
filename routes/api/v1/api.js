var express         = require('express');
var router          = express.Router();

var DB              = require('../../../db/db.js');

var users           = require('./users/users.js');

var authKeySecret = function (req, res, next) {
    var key = req.headers.key;
    var secret = req.headers.secret;

    res.setHeader('Content-Type', 'application/json');

    if ( key === 'mattdaisleykey' && secret === 'mattdaisleysecret' ) {
        next();
    } else {
        res.status(403);
        res.send({ 
            success: false, 
            message: 'Key or secret invalid' 
        });
    }
};

router.use(authKeySecret);

router.get('/', function (req, res) {
    res.send({success: true, message: 'API Endpoint'});
});

router.use('/users', users.router);

module.exports = { 
    'router': router
};