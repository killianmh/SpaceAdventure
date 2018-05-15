var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("spacerats", function () {
	// The default tests in mocha is 2 seconds.
	// Extending it to 30 seconds to have time to load the pages

	this.timeout(30000);
	it("should allow user to login", function (done) {
		// ID for the login button.
		Nightmare({ show: true })
			.goto("https://stark-meadow-67785.herokuapp.com/")
			.click("#login-modal")
			.click("a[href='#home']")
			.wait(1000)
			.type("input[name='username'", "testUser4")
			.type("input[name='password'", "1234")
			.click("input[value='Sign Up']")
			.wait(5000)
			// Evaluate the title
			.evaluate(function () {
				return document.title;
			})
			// Asset the title is as expected
			.then(function (title) {
				expect(title).to.equal("Rats in SPAAAAAAAACE!!!");
				done();
			});
	});
});
