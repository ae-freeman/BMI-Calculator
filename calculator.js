//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var result =  Math.round(weight / (Math.pow(height, 2)));
  res.send("Your BMI is " + result);
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
