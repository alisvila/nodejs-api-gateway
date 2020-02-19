var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(8001);