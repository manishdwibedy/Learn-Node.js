var greet = require('./greet.js');
greet.greet();
greet.greeting = 'Hola!!'

// Caching of require modules
var greet_new = require('./greet.js');
greet_new.greet();
