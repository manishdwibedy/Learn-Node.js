'use strict';
var Greet = require('./greeting')


var greeter = new Greet();
greeter.on('greet', function(data){
    console.log(data + ' just greeted!!');
});

greeter.greet('Manish');
