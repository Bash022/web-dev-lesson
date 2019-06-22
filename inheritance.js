// Prototype inheritance 
// Person Constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}
// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;

}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer

const customer1 = new  Customer('John', 'Doe', '555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.firstName} welcome to our company`;
}

console.log(customer1.greeting());