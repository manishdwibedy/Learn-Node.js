var util = require('util');

function Person(){
    this.firstName = 'Manish';
    this.lastName = "Dwibedy";
}

Person.prototype.greet = function(){
    console.log(this.firstName + ' ' + this.lastName);
}

function PoliceMan(){
    this.badgeNumber = '1234';

}

util.inherits(PoliceMan, Person);
var officer = new PoliceMan();
officer.greet();
