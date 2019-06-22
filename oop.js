// Object literal
// const person = {
//     name: 'John'
// };

// Person constructor
// function Person(name) {
//     this.name = 'John';

// }

// const john = new Person();


// console.log(john.name);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }


// console.log(this);

// const john = new Person('Bob', 36);

// console.log(john);

// CONSTRUCTOR AND THIS. KEYWORD
// Person constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new  Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const bob = new Person("Bob", '5-13-1983');
// const jay = new Person("Jay", 'may-13-1983');

console.log(bob.calculateAge());

