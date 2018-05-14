var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("spacerats", function () {
	// The default tests in mocha is 2 seconds.
	// Extending it to 30 seconds to have time to load the pages

	this.timeout(30000);
	it("should allow user to login", function (done) {
		// ID for the login button.
		Nightmare({ show: true })
			.goto("localhost:3000")
			// Click the catalog link
			.click("btn[data-target='#exampleModal']")
			//a[href='/catalog/subject/all']
			.click("a[href='#home']")
		// Evaluate the title
		// .evaluate(function () {
		// 	return document.title;
		// })
		// Asset the title is as expected
		// .then(function (title) {
		// 	expect(title).to.equal("Catalog | Codecademy");
		// 	done();
		// });
	});
});

// 	it("should present a link to course catalog after login", function (done) {
// 		new Nightmare({ show: true })
// 			.goto("https://www.codecademy.com/login")
// 			// Enter username.
// 			.type("#user_login", "ResilD")
// 			// Enter password.
// 			.type("#login__user_password", "dummy*password")
// 			// Click the login button
// 			.click("#user_submit")
// 			// Evaluate the following selector
// 			.evaluate(function () {
// 				// Assert the "learn" link can be found
// 				return document.querySelector("a[href='/learn']");
// 			})
// 			.then(function (link) {
// 				expect(link).to.not.equal(undefined);
// 				done();
// 			});
// 	});
// });
