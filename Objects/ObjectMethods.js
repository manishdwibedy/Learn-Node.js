function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.greet = function(){
    console.log('My name is ' + this.firstName + ' ' + this.lastName)
}
var me = new Person('Manish', 'Dwibedy')
me.greet()
