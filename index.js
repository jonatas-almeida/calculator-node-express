//jshint esversion:6

//Requires
const express = require('express');
const bodyParser = require('body-parser');

//Declarations
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Server start
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//GET Method
app.get('/', function(req, res){
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/bmi-calculator', function(req, res){
  res.sendFile(__dirname + '/pages/bmi-calculator.html');
});

//POST Method
app.post('/index.html', function(req, res){
  //Declaring variables
  var firstValue = req.body.firstValue;
  var operator = req.body.operator;
  var secondValue = req.body.secondValue;
  //Result variable
  var result = eval(firstValue + operator + secondValue);

  //Result output
  res.send("O resultado é " + result);
});

//POST Method - BMI Calculator
app.post('/bmi-calculator', function(req, res){
  var weightValue = req.body.weightValue;
  var heightValue = req.body.heightValue;
  var calcQuadradoAltura = eval(heightValue^2);

  var result = eval(weightValue/calcQuadradoAltura);

  res.send("O seu IMC é " + result);
})
