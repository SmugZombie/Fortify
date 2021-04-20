
const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()
const options = { type: 'application/json'}
require('dotenv').config()
var config = require('./config/config');

// Allow for raw posts
app.use(bodyParser.raw(options));

app.post('/notify', async function(req, res, next){

    //console.log(JSON.stringify(req.body.toString()));

    console.log(req.body.toString());

    let err = "404 - Endpoint not found or incorrect method used"
	res.status(404).send({ "message": "fail", "details": `${err}` });
});

// Start the webserver on the specified by .env port
app.listen(config.app.port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${config.app.port}`)
  })
