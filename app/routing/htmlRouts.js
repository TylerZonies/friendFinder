var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    app.get("/js", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.js"));
    });
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    app.get("/survey/js", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.js"));
    });
    app.get("*", function(req, res){
        res.status(404).end();
    });
};
