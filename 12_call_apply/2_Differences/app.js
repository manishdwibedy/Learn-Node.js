var greeting = {
    greeting: 'Hello',
    greet: function(name, message){
        console.log(this.greeting + ', ' + name);
        console.log(message)
    }
}

greeting.greet('World!!', 'Welcome to Node.js');
greeting.greet.call({ greeting: 'Hola'}, 'Manish', 'How are you?');
greeting.greet.apply({ greeting: 'Hey'}, ['there!', 'Hope you doing fine!!']);
