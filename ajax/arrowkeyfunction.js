// ARROW FUNCTION

// const sayHello = function(){
//     console.log('hello');

// };

// const sayHello = () => {
//     console.log('hello');
// }

// // One Line Function does not need braces
// const sayHello = () => console.log('hello');

// One Line Returns
// const sayHello = () => 'hello';

// Same as above ^
// const sayHello = function(){
//     return 'Hello';
// }

// console.log(sayHello());

// return Object
// const sayHello = () => ({msg: 'Hello'}); //Add ()
// console.log(sayHello());

// Single param does not need parenthesis()
// const sayHello = name => console.log(`Hello ${name}`);


// sayHello('bob');

// MULTIPLE PARAMETER NEED PARENTHESIS
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('bob', 'ferrer');

const users = ['Nathan', 'John', 'William'];    //map means - high order function
// const nameLength = users.map(function(name){
//     return name; //.name means if u dont need to count letters per name .length means with count
// });
// console.log(nameLength);

// Alternative or shorter way
// const nameLength = users.map((name) => {
//     return name.length;
// }) 


// SHORTEST WAY BES
const nameLengths = users.map(name => name.length);
console.log(nameLengths);