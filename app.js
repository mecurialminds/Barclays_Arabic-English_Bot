const express = require('express');
var say = require("say");
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
var request = require('request');


app.get('/hr', (req, res) => {
	var qry = req.query.qry;
  var options = { method: 'POST',
  url: 'http://192.187.98.12:5005/webhooks/rest/webhook',
  headers: 
   { 'Content-Type': 'application/json' },
  body: { sender: 'Rasa', message: ''+ qry},
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  res.json({ body})
});



});


app.get('/saveVoice', (req, res) => {
	var filename = "myaudio.wav";
	console.log("**********//////\\\\\\\******** "  +filename);
	var qry = req.query.qry;
	say.export("I'm sorry, Dave.", 'Cellos', 0.75, 'hal.wav', (err) => {
	  if (err) {
		return console.error(err)
	  }

  console.log('Text has been saved to hal.wav.')
});
});
app.listen(3018, () => console.log('Express server is running at port no : 3018'));