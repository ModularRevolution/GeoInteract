/**
 * Created by Ali on 2017-04-22.
 */

var express = require('express');
var app = express();

var User = require('../models/user');

app.post('/api/updateLocation',function(req,res,next){
    User.findById(req.body.id, function(err, user) {
        user.location.coordinates = req.body.coordinates;
        user.save(function(err) {
            if (err) {
                console.log(err);
            }
        });
        console.log((user.location.coordinates));
        return res.status(200).send("COORDINATES UPDATED... + \n- user email: " + user.local.email + "- user coordinates: "  + user.location.coordinates);
    });
});

module.exports = app;