var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

app.listen(3031, console.log("Zombies to fight on port 3031"))