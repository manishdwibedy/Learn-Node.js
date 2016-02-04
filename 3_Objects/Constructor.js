function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

var me = new Person('Manish', 'Dwibedy')
console.log(me.firstName)
console.log(me.lastName)
