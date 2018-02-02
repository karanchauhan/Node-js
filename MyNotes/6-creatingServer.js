var http = require('http');

var server = http.createServer(function(req, res){
  console.log(req.url);
  //set response headers
  res.writeHead(200,{'Content-Type':'text/plain'});
  //set response body
  res.end('Hello world');
});

server.listen(48080, '127.0.0.1');
console.log('Listening to 127.0.0.1:48080');
