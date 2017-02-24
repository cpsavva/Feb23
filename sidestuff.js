// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================
var request = require('request');

var secretKeyThePublicShouldNeverSee = 'dc6zaTOxFJmzC';

app.get('/v1/gifs/search', function(req, res) {
  console.log(req.query);
  //do all the stuff giphy does to search for query term
  request.get(`http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=${secretKeyThePublicShouldNeverSee}`, function(req, res) {
    console.log(res);
  })
})




app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});
app.get('/api/name', function() {

})


// What does the question mark indicate?
app.get("/api/:name", function(req, res) {
  // What does this code do?
  var chosen = req.params.name;

  if (chosen) {
    console.log(chosen);

    // What does this code do?
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        res.json(characters[i]);
        return;
      }
    }

    res.send("No character found");

  }

  // What does this code do?
  else {
    res.json(characters);
  }
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});