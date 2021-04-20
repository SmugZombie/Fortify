
const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()
const axios = require('axios');
const options = { type: 'application/json'}
require('dotenv').config()
var config = require('./config/config');
const discordWebhook = require('./lib/discordWebhook');

// Allow for raw posts
app.use(bodyParser.raw(options));

app.post('/notify', async function(req, res, next){

    console.log(req.headers);

    //let event = JSON.parse(req.body.toString());
    let event = {}
    event.description = req.headers.description;
    event.host = req.headers.hostname;
    event.raw = req.headers.rawlog;

    discordWebhook.createMessage(event);

    let err = "404 - Endpoint not found or incorrect method used"
	res.status(404).send({ "message": "fail", "details": `${err}` });
});

// Start the webserver on the specified by .env port
app.listen(config.app.port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${config.app.port}`)
  })
