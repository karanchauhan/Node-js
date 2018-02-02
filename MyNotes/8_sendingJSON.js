var http = require('http');
var fs = require('fs');
//tell express to use ejs as view engine
app.set('view engine', 'ejs');

var server = http.createServer(function(req, res) {

  if(req.url==='/'||req.url==='/home') {
    fs.createReadStream(__dirname+"/index.html",'utf8').pipe(res);
    res.writeHead(200, {'Content-type':'text/html'});
  } else if(req.url==='/api/students') {
      var json = [{
        name : 'Karan',
        age : 25,
        job : 'student'
      },{
        name : 'Ryu',
        age : 26,
        job : 'student'
      }];
      res.writeHead(200, {'Content-type':'application/json'});
      // cannot write res.end(json); since res.end expects Stream
      // therefore we need to serialize the json
      res.end(JSON.stringify(json));
    } else {
      fs.createReadStream(__dirname+"/404.html",'utf8').pipe(res);
      res.writeHead(404, {'Content-type':'text/html'});
    }
});

server.listen(48080, '127.0.0.1');
