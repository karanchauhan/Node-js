var express = require('express');
var app = express();
//tell express to use ejs as view engine
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
  res.sendFile(__dirname+"/index.html");
});

app.get('/contact', function(req,res) {
  res.sendFile(__dirname+"/contact.html");
});

app.get('/api/student/:name', function(req, res){
  var prof = {age:25, job:'student'}
  res.render('student',{studentProfile:req.params.name, data: prof});
});

app.listen(48082);
