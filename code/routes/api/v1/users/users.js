var express         = require('express');
var bodyParser      = require('body-parser');
var merge           = require('merge');
var bcrypt          = require('bcrypt');
var router          = express.Router();

var DB              = require('../../../../db/db.js');

var con = DB.con;

var User = function(objUser) {
    this.id = 0;
    this.name = '';
    this.password = '';
    this.email = '';

    if ( objUser ) { 
        merge.recursive(this, objUser); 
    };
    return this;
};

User.prototype.checkPassword = function(passw) {
    var self = this;

    return new Promise(function(resolve, reject) {
        bcrypt.compare(passw, self.password, function (err, isMatch) {
            if ( err ) {
                reject({status:500,response:err});
                return;
            }
            if ( isMatch ) {
                resolve({status:200,response:self});
            } else {
                reject({status:401,response:'password or email does not match'});
            }
        });
    });
};

User.prototype.genPassword = function() {
    var self = this;

    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(10, function (err, salt) {
            if ( err ) { 
                reject({status:500, response:err}); 
                return;
            };

            bcrypt.hash(self.password, salt, function (err, hash) {
                if ( err ) { 
                    reject({status:500, response:err}); 
                    return;
                };

                self.password = hash;
                resolve({status:200});
            });
        });
    });
};

var Users = function() {
    return this;
}

Users.prototype.insert = function(user) {
    console.log(user);
    return new Promise(function(resolve, reject) {
        con.query('INSERT INTO users (email, password) VALUES (?,?)', [user.email, user.password], function(err,rows){

            if ( err ) { 
                reject({status:500, response:err}); 
            };

            resolve({status:200});

        });
    });
};

Users.prototype.addUser = function(data) {
    var self = this;

    var user = new User(data);

    return new Promise(function(resolve, reject) {
        // generate a new password
        user.genPassword()
        .then(function(){
            // create a new user entry
            return self.insert(user);
        })
        .catch(function(err){
            // there was an error generating the user's password
            reject(err);
        })
        .then(function(){
            // get the newly created user info
            return self.getOneByEmail(user.email)
        })
        .then(function(response){
            // return the new user info
            resolve(response);
        })
        .catch(function(err) {
            // there was an error inserting or getting the user info
            reject(err);
        }); 
    });
};

Users.prototype.getAll = function() {
    return new Promise(function(resolve, reject) {
        var Query = new DB.Query('users');

        con.query(Query.toString(), Query.getParams(), function(err,rows){

            if ( err ) { 
                reject({status:500, response:err}); 
            };

            resolve({status:200, response:JSON.parse(JSON.stringify(rows))});

        });
    });
};

Users.prototype.searchAll = function(query) {
    return new Promise(function(resolve) {
    
        var Query = new DB.Query('users');

        if ( query.id ) {
            Query.where('id',query.id);
        }
        if ( query.email ) {
            Query.where('email',query.email);
        }
        if ( query.name ) {
            Query.where('name',query.name);
        }

        con.query(Query.toString(), Query.getParams(), function(err,rows){
            if ( err ) { 
                reject({status:500, response:err}); 
                return; 
            };
            resolve({status:200,response:JSON.parse(JSON.stringify(rows))});
        });
    });
};

Users.prototype.getOneByID = function(id) {
    return new Promise(function(resolve, reject) {
        var Query = new DB.Query('users')
            .where('id',id);
        
        con.query(Query.toString(), Query.getParams(), function(err,rows){
            var arrUsers = JSON.parse(JSON.stringify(rows));

            if ( err ) { 
                reject({status:500, response:err}); 
                return;
            };

            if ( arrUsers.length < 1 ) {
                reject({status:401, response:[]});
                return;
            };

            resolve({status:200, response:arrUsers[0]});
        });
    });
};

Users.prototype.getOneByEmail = function(email) {
    return new Promise(function(resolve, reject) {
        var Query = new DB.Query('users')
            .where('email',email);

        con.query(Query.toString(), Query.getParams(), function(err,rows){
            var arrUsers = JSON.parse(JSON.stringify(rows));

            if ( err ) { 
                reject({status:500, response:err}); 
                return;
            };

            if ( arrUsers.length < 1 ) {
                reject({status:401, response:[]});
                return;
            };

            resolve({status:200, response:arrUsers[0]});
        });
    });
};

router.get('/', function (req, res) {

    new Users()
    .getAll()
    .then(function(result){
        res.status(result.status).send(result.response);
    })
    .catch(function(err){
        console.log(err);
        res.status(err.status).send(err.response);
    });
});

router.get('/search/:query', function (req, res) {
    var query = {};

    if ( req.params.query ) {
        query = unserialize(req.params.query);
    }

    new Users()
    .searchAll(query)
    .then(function(result){
        res.status(result.status).send(result.response);
    })
    .catch(function(err){
        console.log(err);
        res.status(err.status).send(err.response);
    });
            
});

router.get('/:id', function (req, res) {

    var id = req.params.id;

    new Users()
    .getOneByID(id)
    .then(function(result){
        res.status(result.status).send(result.response);
    })
    .catch(function(err){
        console.log(err);
        res.status(err.status).send(err.response);
    });
});

router.post('/', function (req, res) {
    var users = new Users();

    if ( !req.body.email ) {
        res.status(500).send({err:'Please provide an email.'});
        return;
    }
    if ( !req.body.password ) {
        res.status(500).send({err:'Please provide a password.'});
        return;
    }

    users.getOneByEmail(req.body.email)
        .then(getOneByEmailComplete)
        .then(checkPasswordComplete)
        .catch(handleError);

    function getOneByEmailComplete (result) {
        var user = new Users.User(result.response);
        return user.checkPassword(req.body.password);
    };

    function checkPasswordComplete (result) {
        res.status(result.status).send(result.response);
    };

    function handleError (err) {
        console.log(err);
        res.status(err.status).send(err.response);
    };
});

router.put('/', function (req, res) {
    var users = new Users();

    if ( !req.body.email ) {
        res.status(500).send({err:'Please provide an email.'});
        return;
    }
    if ( !req.body.password ) {
        res.status(500).send({err:'Please provide a password.'});
        return;
    }

    // check if the user exists
    users.getOneByEmail(req.body.email)
        .then(getOneByEmailComplete)
        .catch(getOneByEmailFailed)
        .then(addUserComplete)
        .catch(addUserFailed);

    function getOneByEmailComplete(result) {
        // finding the user means we can't create one now
        res.status(401).send({err:'Unable to create this user.'});
    };

    function getOneByEmailFailed(err) {
        // failed is a good thing. we know the user doesn't exist so lets created it
        var user = new User(req.body);
        return users.addUser(user);
    };

    function addUserComplete(result) {
        res.status(result.status).send(result.response);
    };

    function addUserFailed(err) {
        res.status(err.status).send(err.response);
    };
});

// help methods

function unserialize ( str ) {
    if ( !str ) return;
    return str.split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
};

function serialize ( obj ) {
    if ( !obj ) return '';
    return Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&');
};

module.exports = { 'Users': Users, 'User':User, 'router': router };