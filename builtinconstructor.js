// Build in Constructor
// String

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// console.log(typeof name2);

// if(name2 === 'Jeff'){
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// Number 
const num1 = 5;
const num2 = new Number(5);

// console.log(num2);


// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y){
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');


// Object 
const john1 = {name: 'John'}
const john2 = new Object({name: 'John'});


// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr2);
