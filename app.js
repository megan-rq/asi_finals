// Aquino, Bea Nichole T. - Dizon, Maycee G. - Quizon, Megan Rae L.
// CS - 401     6ASI    Activity
// November 11 2021

const bodyParser = require("body-parser");
const express = require("express");
const admin = require("firebase-admin");

const PORT = process.env.PORT || 5000;
const app = express();

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.get("/login", function (req, res) {
  	res.render("login.html");
});

app.get("/signup", function (req, res) {
  	res.render("signup.html");
});

app.get("/profile", function (req, res) {
    res.render("profile.html");
});


app.get("/", function (req, res) {
	res.render("signup.html");
});

app.listen(PORT, () => {
  	console.log(`Listening on http://localhost:${PORT}`);
});