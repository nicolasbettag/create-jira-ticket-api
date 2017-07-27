var requestify = require('requestify');

exports.post = function(options, callback) {

	requestify.request(options.config.host, {
			method: 'POST',
			body: options.data,
			headers: {
				'content-type': 'application/json'
			},
			auth: {
				username: options.config.username,
				password: options.config.password
			},
			dataType: options.config.datatype
		})
		.then(function(response) {
			response.getBody();
			response.body;
		})
};
