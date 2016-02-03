var Emitter = require('events');
var eventConfig = require('./config.js').events;

var emitterObj = new Emitter();

emitterObj.on(eventConfig.GREET, function(){
    console.log('Listener 1 called.');
});

emitterObj.on(eventConfig.GREET, function(){
    console.log('Listener 2 called.');
});

console.log('Started emitting events.');
emitterObj.emit(eventConfig.GREET);
