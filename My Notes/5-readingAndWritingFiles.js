var fs = require('fs');

//for blocking read of file
//var readfile = fs.readFileSync('5-readFile.txt','utf8');

//for nonblocking read
//function is called after
fs.readFile('5-readFile.txt','utf8', function(err, data) {
  var txt = "Extra line\n"
  //creating a new file with content of readfile
  //for blocking write use,
  //fs.writeFileSync('5-writeFile.txt', data+txt);

  // for non blocking write,
  fs.writeFile('5-writeFile.txt', data+txt, function(err, data) {
    console.log(err+","+data); //prints null, undefined
    console.log("we are done");
  });
});

console.log("This is printed first");
//since read and write are non blocking, the operations take some time
//hence this is output first
