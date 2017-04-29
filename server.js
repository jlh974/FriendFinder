var express = require("express");
var body-parser = require("body-parser");
var path - require("path");

var port = 8080

var server = http.createServer(handleRequest);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  characters.push(newFriend);

  res.json(newFriend);
});




app.listen(PORT, function() {
});