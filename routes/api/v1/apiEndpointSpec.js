process.env.NODE_ENV = 'dev';
var app			    = require("../../../materials-app.js");

var request = require("request");

var base_url = "http://localhost:3000/api/v1"

API = {};
API.headers = { 
    'key': 'mattdaisleykey',
    'secret' : 'mattdaisleysecret'
};

describe("GET api/v1", function() {
    it("returns status code 401 if headers are not provided", function(done) {
	  	var endpoint = "/";
    	request({
	        url: base_url + endpoint,
	        method: 'GET'
	    }, function(error, response, body) {
	      	expect(response.statusCode).toBe(403);
	      	done();
	    });
    });
    
    it("returns status code 403 if secret header is not provided", function(done) {
	  	var endpoint = "/";
    	request({
	        url: base_url + endpoint,
	        headers: { secret: 'mattdaisleysecret' }, 
	        method: 'GET'
	    }, function(error, response, body) {
	      	expect(response.statusCode).toBe(403);
	      	done();
	    });
    });
    
    it("returns status code 403 if key header is not provided", function(done) {
	  	var endpoint = "/";
    	request({
	        url: base_url + endpoint,
	        headers: { secret: 'mattdaisleykey' }, 
	        method: 'GET'
	    }, function(error, response, body) {
	      	expect(response.statusCode).toBe(403);
	      	done();
	    });
    });
    
    it("returns status code 403 if secret header is not correct", function(done) {
	  	var endpoint = "/";
    	request({
	        url: base_url + endpoint,
	        headers: { key: 'mattdaisleykey', secret: 'mattdaisleysecrets' }, 
	        method: 'GET'
	    }, function(error, response, body) {
	      	expect(response.statusCode).toBe(403);
	      	done();
	    });
    });
    
    it("returns status code 403 if key header is not correct", function(done) {
	  	var endpoint = "/";
    	request({
	        url: base_url + endpoint,
	        headers: { key: 'mattdaisleykeys', secret: 'mattdaisleysecret' }, 
	        method: 'GET'
	    }, function(error, response, body) {
	      	expect(response.statusCode).toBe(403);
	      	done();
	    });
    });
});

