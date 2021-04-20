'use strict';
const axios = require('axios');
var config = require('../config/config');

module.exports = class discordWebhook {
	static async createMessage(event){
		var data = JSON.stringify({
			"content": event
		});

		var axiosconfig = {
			method: 'post',
			url: config.discord.webhook,
			headers: { 
				'Content-Type': 'application/json'
			},
			data : data
		};

		axios(axiosconfig)
		.then(function (response) {
		console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
		console.log(error);
		});

	}
};
