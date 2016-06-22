process.env.NODE_ENV = 'dev';
var app			    = require("../../../../materials-app.js");

var request 		= require("request");
var Users 			= require("./users.js");
var DB              = require('../../../../db/db.js');

var con = DB.con;

var base_url = "http://localhost:3000/api/v1"

var users = new Users.Users();

describe("Users class", function() {
    
    it("it gets the correct user by email", function(done) {
        var email = 'mattdaisley@gmail.com';
        users.getOneByEmail(email)
            .then(getOneByEmailComplete)
            .catch(getOneByEmailFailed);

        function getOneByEmailComplete (result) {
            var user = result.response;
            expect(user.id).toEqual(76);
            done();
        };

        function getOneByEmailFailed (err) {
            done();
        };
    });
    
    it("it returns an error if the user does not exist", function(done) {
        var email = 'nouser@gmail.com';
        users.getOneByEmail(email)
            .then(getOneByEmailComplete)
            .catch(getOneByEmailFailed);

        function getOneByEmailComplete (result) {
            expect(result).toBe(undefined);
            done();
        };

        function getOneByEmailFailed (err) {
            expect(err.status).toEqual(401);
            done();
        };
    });

    it("verifys a correct password", function(done){
        var email = 'mattdaisley@gmail.com';
    	var password = '1234567';

        users.getOneByEmail(email)
            .then(getOneByEmailComplete)
            .then(checkPasswordComplete)
            .catch(handleError);

        function getOneByEmailComplete (result) {
            var user = new Users.User(result.response);
            return user.checkPassword(password);
        };

        function checkPasswordComplete (result) {
            expect(result.status).toEqual(200);
            done();
        };

        function handleError (err) {
            expect(err).toBe(undefined);
            done();
        };
    });

    it("returns an error if the wrong password is provided", function(done){
        var email = 'mattdaisley@gmail.com';
        var password = 'badpassword';

        users.getOneByEmail(email)
            .then(getOneByEmailComplete)
            .then(checkPasswordComplete)
            .catch(handleError);

        function getOneByEmailComplete (result) {
            var user = new Users.User(result.response);
            return user.checkPassword(password);
        };

        function checkPasswordComplete (result) {
            expect(result).toBe(undefined);
            done();
        };

        function handleError (err) {
            expect(err.status).toEqual(401);
            done();
        };
    });
});


describe("server", function(){
    it("closes the server", function(){
    	app.closeServer();
    });
});
