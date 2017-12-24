var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Genre = require('./model/genre.js')

// connecting  database

mongoose.connect('mongoose://localhost/baconApp');
var db = mongoose.connection

app.get('/',function(req,res){
     res.send("Test passed");

});

app.get('/api/books',function (req,res){
     res.send("we are her in books");
});

app.get('/api/genre',function (req,res){
     Genre.getGenres(function (err,genre){
      if(err){
           throw err ;
      }
    res.json(gen);
     })

});

app.listen(3000);
console.log("Running on port 3000....")
