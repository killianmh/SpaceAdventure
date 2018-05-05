var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// var exphbs = require('express-handlebars');

// app.engine('handlbars', exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

var routes = require("./controllers/game_controller.js");

app.use(routes);

app.listen(process.env.PORT || PORT, function(){
    console.log("Server listening on: http://localhost:"+ PORT);
});

