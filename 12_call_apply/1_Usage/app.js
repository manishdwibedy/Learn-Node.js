var greeting = {
    greeting: 'Hello',
    greet: function(){
        console.log(this.greeting);
    }
}

greeting.greet();
greeting.greet.call({ greeting: 'Hola'});
greeting.greet.apply({ greeting: 'Hey'});
