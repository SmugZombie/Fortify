'use strict';
const axios = require('axios');
var config = require('../config/config');

module.exports = class discordWebhook {
	static async createMessage(event){
		var data = JSON.stringify({
			"content": "A new event was forwarded.",
			"embeds": [
				{
					"title": "Log:",
					"description": event.rawlog,
					"color": null,
					"fields": [
						{
						  "name": "Hostname",
						  "value": event.host
						},
						{
						  "name": "Description",
						  "value": event.description
						}
					],
					"footer": {
						"text": "Forwarded by Fortify"
					  }
				}
			],
			"username": event.host.toUpperCase()
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
