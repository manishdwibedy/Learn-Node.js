'use strict';
var EventEmitter = require('events');


class Greet extends EventEmitter{
    constructor(){
        super();
        this.greeting = "Hello World";
    }

    greet(data){
        console.log(this.greeting + ' from ' + data);
        this.emit('greet', data);
    }
}

var greeter = new Greet();
greeter.on('greet', function(data){
    console.log(data + ' just greeted!!');
});

greeter.greet('Manish');
