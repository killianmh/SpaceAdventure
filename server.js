var db = require("./models");

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// var exphbs = require('express-handlebars');

// app.engine('handlbars', exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

var routes = require("./controllers/game_controller.js");

app.use(routes);

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on http://localhost: " + PORT);
    });
  });
