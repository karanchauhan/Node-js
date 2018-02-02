//normal function statement
function sayHi() {
  console.log('hi');
}

sayHi();

//function expression

var sayBye = function() {
  console.log('bye');
};

sayBye();

// we can pass a function to another function

function callFunction(x,y) {
  x();
  console.log(y);
}

callFunction(sayHi,'bye');
