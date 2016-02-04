'use strict';
var EventEmitter = require('events');


module.exports = class Greet extends EventEmitter{
    constructor(){
        super();
        this.greeting = "Hello World";
    }

    greet(data){
        console.log(this.greeting + ' from ' + data);
        this.emit('greet', data);
    }
}
