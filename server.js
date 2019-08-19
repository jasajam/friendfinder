// step 1 - require express and path

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT);
});

