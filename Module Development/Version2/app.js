var greetObj = require('./greet.js');
greetObj.greet();


// Same as the above
var greetFunction = require('./greet.js').greet;
greetFunction();
