counter = function(arr) {
  return 'There are '+ arr.length+ ' elements in array';
};

var arr = ['shaun', 'crystal', 'ryu'];

//1st way of exporting
module.exports.adder = function(a,b) {
  return 'Addition is '+(a+b);
};

var pi = 3.142;

//following exports said functions, other methods, variables not visible

//Second way of exporting
module.exports.counter=counter;
//module.exports.adder=adder;
module.exports.pi=pi;

//3rd way of exporting

// module.exports = {
//   counter:counter,
//   pi:pi,
//   adder:adder
// };
