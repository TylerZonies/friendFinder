var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var port = process.env.PORT || 6969;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRouts")(app);
require("./app/routing/htmlRouts")(app);




app.listen(port, () => {
    console.log('listening on port:' + port);
})