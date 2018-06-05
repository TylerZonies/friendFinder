var path = require("path");
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
var friends = require("../data/friends.js")

module.exports = function(app){
    
    app.post("/api/friends", function(req, res){
        // useing body parser get the object passed in from the .post
        for(var i = 0; i < friends.length; i++){
            var diff = 0;
            for(var j = 0; j < friends[i].scores.length; j++){
                var friend = friends[i];
                var newFriend = req.body.scores[j];
                console.log("incoming: " + newFriend + " stored: " + friend.scores[j]);
                diff += Math.abs(parseInt(friend.scores[j]) - parseInt(newFriend));
                
            }
            console.log("difference index: " + i + " is " + diff);
            var winner = {
                index: 0,
                difference: 0
            }
            if(diff > winner.difference){
                winner.index = i;
                winner.difference = diff;
            }
        }
        console.log(winner.index);
        friends.push(req.body);
        // take the answer array and for each object in friend data check each answer
        res.json(friends[winner.index]);
        // take the lowest difference and save the object of the person they matched
        // send the name of that object back to the front end with the image
    })
}