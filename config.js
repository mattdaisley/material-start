var config = {};

config.web = {};

switch ( process.env.NODE_ENV ) {
	// dev overrides for configuration values
	case 'dev':
		config.web.port = 3030;
		config.web.host = '127.0.0.1';
		break;
	default:
		config.web.port = 8000;
		config.web.host = '172.31.31.106';
		break;
}

module.exports = config;

//EAAH5UYZBm5uQBAGyNRq9hZAYX7TBDGdxoteNzJbv9pL7wCRHRVA6lCnogl3ntN8gBmasUZBAIxZBXGCtc7ERuebLjxUrVouiBw6tBK0dSTexYsOtO0IcrgPwv1G9eBTtGDZCRAvbmeOwor8V2hbkwRXWxxbgyyyYQB9kzh3vX4gZDZD