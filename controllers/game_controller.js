var express = require("express");

var db = require("../models");

// var passport = require('passport');

var router = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/signin');
};

//post route uses the character model to create our character with the users choice of name
//DO WE NEED TO SAVE AVATARRRRRRRR
router.post("/api/character", function (req, res) {
	db.character.create({
		name: req.body.name,
		charImg: req.body.charImg,
		userId: req.user.id
	})
		.then(function (result) {
			res.json({ id: result.insertId })
		});
});

//post route creates our spaceship in database with chosen name
router.post("/api/spaceship", function (req, res) {
	console.log(req.body);
	db.spaceship.create({
		shipImg: req.body.shipImg,
		userId: req.user.id
	})
		.then(function (result) {
			res.json({ id: result.insertId });
		});
});

//put route to refresh values after restarting:
router.delete("/api/restart", function (req, res) {

	db.character.destroy({
		where:
			{ userId: req.user.id }
	})
		.then(function (data) {
			db.spaceship.destroy({
				where:
					{ userId: req.user.id }
			}

			).then(function (data) {
				res.end();
			});
		});
});


//put route updates certain values pertaining to character based on events ex. when damage is taken, health value is adjusted in DB
router.put("/api/character", function (req, res) {

	db.character.update({
		// name: "bill"
	}, {
			where:
				{ userId: req.user.id }
		}

	).then(function (data) {
		res.end();
	})

});


router.get("/", function (req, res) {
	res.render("index");
});

//this route is used to keep the character specific information update on game tile 
router.get("/game", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('game', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
		});
	})
});

router.get("/stage1", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('stage1', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
		});
	})
});

router.get("/result1", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('result1', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
		});
	})
});

router.get("/stage2", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('stage2', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
		});
	})
});

router.get("/stage3", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('stage3', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
		});
	})
});

router.get("/result2", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('result2', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
		});
	})
});

router.get("/result3", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('result3', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
		});
	})
});

router.get("/stage4", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('stage4', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
		});
	})
});

router.get("/asteroid", function (req, res) {
	db.user.findOne({
		where: {
			id: req.user.id

		},
		include: [db.character, db.spaceship]
	}).then(function (data) {
		var renderInfo = data.dataValues;

		res.render('asteroid', {
			character: renderInfo.character.name,
			health: renderInfo.character.health,
			avatar: renderInfo.character.charImg,
			sanity: renderInfo.character.sanity,
			ship: renderInfo.spaceship.shipImg,
			shields: renderInfo.spaceship.shields
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

router.get("/dashboard", isLoggedIn, function (req, res) {
	res.render('dashboard');
})

router.get("/logout", function (req, res) {
	req.session.destroy(function (err) {
		res.redirect("/signin");
	})
})

router.get("/modal", function (req, res) {
	res.render("index");
	var modal = document.getElementById('#exampleModal');
	modal.style.display = "block";



});

// Export routes for server.js to use.
// module.exports = router;

module.exports = function (passport) {
	router.post("/signup", function (req, res, next) {
		passport.authenticate('local-signup', function (err, user, info) {
			if (err) { return next(err); }
			if (!user) { return; }
			req.logIn(user, function (err) {
				if (err) { return next(err); }
				return res.redirect('/characterselect');
			});
		})(req, res, next);
	});

	router.post("/signin", passport.authenticate('local-signin', {
		successRedirect: '/characterselect',
		failureRedirect: '/signin'
	}));

	return router;
}