// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// require("./routes/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/charselect", function (req, res) {
	res.sendFile(path.join(__dirname, "public/charselect.html"));
});


app.get("/shipselect", function (req, res) {
	res.sendFile(path.join(__dirname, "public/shipselect.html"));
});


app.get("/choice1", function (req, res) {
	res.sendFile(path.join(__dirname, "public/choice1.html"));
});
app.get("/result1", function (req, res) {
	res.sendFile(path.join(__dirname, "public/result1.html"));
});
app.get("/result2", function (req, res) {
	res.sendFile(path.join(__dirname, "public/result2.html"));
});

app.get("/choice2", function (req, res) {
	res.sendFile(path.join(__dirname, "public/choice2.html"));
});

app.get("/result3", function (req, res) {
	res.sendFile(path.join(__dirname, "public/result3.html"));
});
app.get("/result4", function (req, res) {
	res.sendFile(path.join(__dirname, "public/result4.html"));
});

app.get("/choice3", function (req, res) {
	res.sendFile(path.join(__dirname, "public/choice3.html"));
});

app.get("/choice4", function (req, res) {
	res.sendFile(path.join(__dirname, "public/choice4.html"));
});

app.get("/result5", function (req, res) {
	res.sendFile(path.join(__dirname, "public/result5.html"));
});


app.get("/result6", function (req, res) {
	res.sendFile(path.join(__dirname, "public/result6.html"));
});


app.get("/conclusion", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/conclusion.html"));
});


// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});