var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-type':'text/html'});
    var readStream = fs.createReadStream(__dirname+'/index.html','utf8');
    readStream.pipe(res);
});

server.listen(48081,'127.0.0.1');
