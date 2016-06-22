// process.env.NODE_ENV = 'dev';
// var app			    = require("../../../../app.js");

// var request 		= require("request");

// var base_url = "http://localhost:3000/api/v1"

// API = {};
// API.headers = { 
//     'key': 'mattdaisleykey',
//     'secret' : 'mattdaisleysecret'
// };

// describe("GET users/", function() {
//     it("returns status code 200", function(done) {
// 	  	var endpoint = "/users";
//     	request({
// 	        headers: API.headers,
// 	        url: base_url + endpoint,
// 	        method: 'GET'
// 	    }, function(error, response, body) {
// 	      	expect(response.statusCode).toBe(200);
// 	      	done();
// 	    });
//     });
// });

// describe("POST users/", function() {
//     it("returns status code 500 if no email is provided", function(done) {
// 	  	var endpoint = "/users";
//     	request({
// 	        headers: API.headers,
// 	        url: base_url + endpoint,
// 	        form: {
// 	            "password": "123456"
// 	        },
// 	        method: 'POST'
// 	    }, function(error, response, body) {
// 	      	expect(response.statusCode).toBe(500);
// 	      	done();
// 	    });
//     });
    
//     it("returns status code 500 if no password is provided", function(done) {
// 	  	var endpoint = "/users";
//     	request({
// 	        headers: API.headers,
// 	        url: base_url + endpoint,
// 	        form: {
// 	            "email": "mattdaisley@gmail.com"
// 	        },
// 	        method: 'POST'
// 	    }, function(error, response, body) {
// 	      	expect(response.statusCode).toBe(500);
// 	      	console.log(body);
// 	      	expect(body).toBe(JSON.stringify({
// 	      		err:'Please provide a password.'
// 	      	}));
// 	      	done();
// 	    });
//     });
    
//     it("returns status code 401 and error message if incorrect password is provided", function(done) {
// 	  	var endpoint = "/users";
//     	request({
// 	        headers: API.headers,
// 	        url: base_url + endpoint,
// 	        form: {
// 	            "email": "mattdaisley@gmail.com",
// 	            "password": "1234567"
// 	        },
// 	        method: 'POST'
// 	    }, function(error, response, body) {
// 	      	expect(response.statusCode).toBe(401);
// 	      	expect(body).toBe(JSON.stringify({
// 				message:'password or email does not match'
// 			}));
// 	      	done();
// 	    });
//     });
    
//     it("returns status code 200 if correct email and password is provided", function(done) {
// 	  	var endpoint = "/users";
//     	request({
// 	        headers: API.headers,
// 	        url: base_url + endpoint,
// 	        form: {
// 	            "email": "mattdaisley@gmail.com",
// 	            "password": "123456"
// 	        },
// 	        method: 'POST'
// 	    }, function(error, response, body) {
// 	      	expect(response.statusCode).toBe(200);
// 	      	done();
// 	    });
//     });
// });

// describe("DELETE users/", function() {
//     it("returns status code 500", function(done) {
// 	  	var endpoint = "/users";
//     	request({
// 	        headers: API.headers,
// 	        url: base_url + endpoint,
// 	        method: 'POST'
// 	    }, function(error, response, body) {
// 	      	expect(response.statusCode).toBe(500);
// 	      	done();
// 	    });
//     });
// });
