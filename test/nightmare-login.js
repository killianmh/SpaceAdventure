var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
	.goto("https://stark-meadow-67785.herokuapp.com/")
	.click("#login-modal")
	.click("a[href='#home']")
	.wait(1000)
	.type("input[name='username'", "testUser")
	.type("input[name='password'", "1234")
	.click("input[value='Sign Up']")
	.wait(30000)
	.wait("#links a")
	.evaluate(function () {
		return document.querySelector("#links a").href;
	})
	.end()
	.then(function (result) {
		console.log(result);
	})
	.catch(function (error) {
		console.error("Search failed:", error);
	});
