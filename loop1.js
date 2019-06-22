// DO WHILE
// let i = 100;

// do {
//     console.log('Number ' +i);
//     i++;
// }
// while (i < 10);

// FOR LOOP USING ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i])

// };

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);

});

// // Map 
// const users = [{id: 1, name: 'John'}, {id: 2, name: 'Sara'},
//  {id: 3, name: 'Steve'}];

//  const ids = users.map(function(user){
//     return user.name;
//  });

//  console.log(ids);

// FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
};

for(let x in user){
    console.log(`${x}: ${user[x]}`);
};