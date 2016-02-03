var EventEmitter = require('events');
var util = require('util');

function Greet(){
    this.greeting = "Hello World";
}

util.inherits(Greet, EventEmitter);
Greet.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

var greeter = new Greet();
greeter.on('greet', function(){
    console.log('Someone just greeted!!');
});

greeter.greet();
