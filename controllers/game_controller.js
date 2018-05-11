var express = require("express");

var db = require("../models");

// var passport = require('passport');

var router = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/signin');
}

//post route uses the character model to create our character with the users choice of name
//DO WE NEED TO SAVE AVATARRRRRRRR
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

router.get("/", function (req, res) {
	res.render("index");
})

//this route is used to keep the character specific information update on game tile 
router.get("/game", function (req, res) {
	db.character.findOne({
		where: {
			userId: req.user.id

		}
	}).then(function (data) {
		res.render('game', {
			character: data.name,
			health: data.health
		});
	})
});

//for loading character select screen
router.get("/characterselect", function (req, res) {
	res.render("char-select");
});

router.get('/shipselect', function (req, res) {
	res.render("ship-select");
});

//passport
router.get("/signup", function (req, res) {
	res.render("signup");
});

router.get("/signin", function (req, res) {
	res.render("signin");
});

router.get("/dashboard", isLoggedIn, function (req, res) {
	res.render('dashboard');
})

router.get("/logout", function (req, res) {
	req.session.destroy(function (err) {
		res.redirect("/signin");
	})
})

// Export routes for server.js to use.
// module.exports = router;

module.exports = function (passport) {
	router.post("/signup", passport.authenticate('local-signup', {
		successRedirect: '/characterselect',
		failureRedirect: '/signup'
	}));

	router.post("/signin", passport.authenticate('local-signin', {
		successRedirect: '/characterselect',
		failureRedirect: '/signin'
	}))
	return router
}