var EventEmitter = require('events');
var util = require('util');

function Greet(){
    this.greeting = "Hello World";
}

util.inherits(Greet, EventEmitter);
Greet.prototype.greet = function(person){
    console.log(this.greeting + ' from ' + person);
    this.emit('greet', person);
}

var greeter = new Greet();
greeter.on('greet', function(person){
    console.log(person + ' just greeted!!');
});

greeter.greet('Manish');
