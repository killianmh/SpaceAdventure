var db = require("./models");

var express = require('express');
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser');
var env = require('dotenv').load();

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport 
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/game_controller.js");

app.use(routes);

db.sequelize.sync({}).then(function () {
	app.get('/', function (req, res) {

		res.send('Welcome to Passport with Sequelize');

	});

	app.listen(PORT, function (err) {
		if (!err)
			console.log("Site is live, App listening on http://localhost:" + PORT);

		else console.log(err)
	});
});
