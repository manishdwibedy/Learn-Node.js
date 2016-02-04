'use strict';

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName =  lastName;
    }

    greet() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

var person = new Person('Manish', 'Dwibedy');
person.greet();
