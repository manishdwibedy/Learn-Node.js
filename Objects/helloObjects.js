var person = {
    firstName: 'Manish',
    lastName: 'Dwibedy',
    greet: function(){
        console.log('My name is ' + this.firstName + ' ' + this.lastName)
    }
}

person.greet()
