var time = 0;
var timer = setInterval(function(){ // to set setInterval
  time++;
  console.log(time+' seconds done');
  if(time>10) {
    clearInterval(timer); // to clear interval
  }
},1000);

console.log(__dirname); // to log current directory
console.log(__filename); // to log current file
