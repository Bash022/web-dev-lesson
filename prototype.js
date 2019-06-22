// PROTOTYPE EXPLAN
// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

// Calculate age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(newLastName) {
    return `${this.firstName} ${this.lastName}`;

}
Person.prototype.getsMaried = function(newLastName) {
    // return `${this.firstName} ${this.lastName}`;
    this.lastName = newLastName;

}

const john = new Person('John', 'Doe', '9-30-98');
const mary = new Person('Mary', 'Johnson', 'March 20 1990');


// console.log(mary.calculateAge());

mary.getsMaried('Ferrer');

// console.log(mary.getFullName());

console.log(mary);
// console.log(mary.hasOwnProperty('getFullName'));