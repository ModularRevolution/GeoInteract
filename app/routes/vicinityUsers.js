/**
 * Created by Ali on 2017-04-22.
 */

var express = require('express');
var app = express();

app.get('/api/vicinityUsers',function(req,res,next){
    return res.status(200).send('hello');
});

module.exports = app;