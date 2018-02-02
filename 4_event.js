var events = require('events');
var util = require('util');

//enables myEmitter to be able to emit an event
var myEmitter = new events.EventEmitter();

// myEmitter will now listen for an event called someEvent
myEmitter.on('someEvent', function(msg) {
  console.log(msg);
});

setTimeout(function foo() {
  //myEmitter emits an event called someEvent
myEmitter.emit('someEvent', 'End of events');
},2000);

var Person = function(name) {
  this.name = name;
};

// All Person objects will have an eventEmitter
util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');
var people = [james, mary, ryu];

//iterating through forEach
people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name+' said '+msg)
  });
});

james.emit('speak','hey dudes!');
ryu.emit('speak', 'I want curry');
