var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
	.goto("https://stark-meadow-67785.herokuapp.com/")
	.click("#login-modal")
	.click("a[href='#home']")
	.wait(1000)
	.type("input[name='username'", "testUser2")
	.type("input[name='password'", "1234")
	.click("input[value='Sign Up']")
	.wait(5000)
	.end()
	.then(function () {
		console.log("Done!");
	})
	.catch(function (error) {
		console.error(error);
	});
