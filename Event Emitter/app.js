var Emitter = require('./emitter');

var emitterObj = new Emitter();

emitterObj.on('greet', function(){
    console.log('Listener 1 called.');
});

emitterObj.on('greet', function(){
    console.log('Listener 2 called.');
});

console.log('Started emitting events.');
emitterObj.emit('greet');
