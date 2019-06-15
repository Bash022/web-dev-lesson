const firstName ='William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Bobby';
const tags = 'Web design, web Developmnt and programming';

let val;
// Concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;
// Append
val = 'Bobby ';
val += 'Ferrer';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";

// length
val = firstName.length;
// Concat
val = firstName.concat(' ',lastName);
// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()

// val = firstName.indexOf('l');
// val = lastName.indexOf('i');

// charAt()
val = firstName.charAt(0);
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0,4);

// slice
val = firstName.slice(0,5);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(' ');

// replace 
val = str.replace('Bobby', 'Jack');

// includes
val = str.includes('Hello');

console.log(val);