// create some arrays
const numbers = [43,45,56,34,44,5];
const numbers2 = new Array(22, 34, 54, 76, 65);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date ()];

let val;

// Get Array Length
val = numbers.length;
// Check if is Array
val = Array.isArray(numbers);
// Get single value
val = numbers [3];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(34);

// Mutating Arrays
    // Add on to end
    numbers.push(250);
    // Add on to front
    numbers.unshift(120);
    // Take off from end
    numbers.pop();
    // take off from front
    numbers.shift();
    // Splice values
    numbers.splice(1,3);
    // Reverse
    numbers.reverse();
    // Concatenate array
    val = numbers.concat(numbers2);

    // Sorting arrays
    val = fruit.sort();
    val = numbers.sort();
    // Use the "compare function"

    val = numbers.sort(function(x, y) {
        return x - y;
    });

    // Find
    function over50(num) {
        return num > 50;
    }

    val = numbers.find(over50);

    // // Reverse sort 
    // val = numbers.sort(function(x, y){
    //     return y - x;
    // })





console.log(val);