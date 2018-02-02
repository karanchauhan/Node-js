var http = require('http');
var fs = require('fs');
//createReadStream inherits from EventEmitter. 'data' is the event that is
//packaged in this created read stream that is triggered whenever data is
// received
//if fs.createReadStream(__dirname+'/7-dummyFile.txt'); then byte stream is
// received
var readStream = fs.createReadStream(__dirname+'/7-dummyFile.txt','utf8');

var writeStream = fs.createWriteStream(__dirname+'/7-writeFile.txt');
//This is of advantage for large chunks of data
// As soon as a chunk is received, we can start processing it
// while the other chunk is being received.
readStream.on('data', function(block) {
  console.log('New block received');
  writeStream.write(block);
});

//  -------- PIPES -----------

// Pipes automatically pipes data from readStream to writeStream.
// We do not have to manually listen for data events and write it
// we pipe from a readable stream to writeable stream.
// therefore an alternative for lines 14-17 is,
//readStream.pipe(writeStream);

// Suppose we want to return to the user, contents of dummyFile

var server = http.createServer(function(req, res) {
  res.writeHead(200,{'Content-Type':'text/plain'});
  readStream.pipe(res); // since res is a writable Stream
});

server.listen(48080, '127.0.0.1');
