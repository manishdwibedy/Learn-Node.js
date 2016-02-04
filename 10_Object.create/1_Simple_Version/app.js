var person = {
    firstName: '',
    lastName: '',
    greet: function(){
        console.log(this.firstName + ' ' + this.lastName)
    }
}

var person1 = Object.create(person);
person1.firstName = 'F1';
person1.lastName = 'L1';

var person2 = Object.create(person);
person2.firstName = 'F2';
person2.lastName = 'L2';
