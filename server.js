const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.post('/', function(req, res) {
    res.status(200).send("Successfully posted ");
});

app.listen(6069);
