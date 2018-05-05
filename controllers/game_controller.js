var express = require("express");

// var character = require("../models/characters.js");

// var spaceship = require("../models/spaceships.js");

var db = require("../models");


var router = express.Router();


//post route uses the character model to create our character with the users choice of name
router.post("/api/character", function (req, res) {
	db.character.create({
		name: req.body.name
	})
		.then(function (result) {
			res.json({ id: result.insertId })
		});
});

//post route creates our spaceship in database with chosen name
router.post("/api/spaceship", function (req, res) {
	console.log(req.body);
	db.spaceship.create({
		name: req.body.name
	})
		.then(function (result) {
			res.json({ id: result.insertId });
		});
});

//put route updates certain values pertaining to character based on events ex. when damage is taken, health value is adjusted in DB
router.put("/api/character/:id", function (req, res) {
	var condition = "id = " + req.params.id;
});
//put route updates certain values pertaining to character based on events ex. when damage is taken, health value is adjusted in DB
router.put("/api/spaceship/:id", function (req, res) {
	var condition = "id = " + req.params.id;

});

// Export routes for server.js to use.
module.exports = router;