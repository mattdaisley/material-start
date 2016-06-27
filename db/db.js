var mysql = require("mysql");
var Query = require("./buildQuery.js");

var DB = {};

DB.con = mysql.createConnection({
	host: "127.0.0.1",
	user: "masteradm",
	password: "ADM.Bodyeye803290.DB",
	database: "mdaisleydata"
});

DB.Query = Query;

module.exports = DB;

//EAAH5UYZBm5uQBAGyNRq9hZAYX7TBDGdxoteNzJbv9pL7wCRHRVA6lCnogl3ntN8gBmasUZBAIxZBXGCtc7ERuebLjxUrVouiBw6tBK0dSTexYsOtO0IcrgPwv1G9eBTtGDZCRAvbmeOwor8V2hbkwRXWxxbgyyyYQB9kzh3vX4gZDZD