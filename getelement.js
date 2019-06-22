// document.getElementByClassName

// const items = document.getElementsByClassName('collection-item');

// // console.log(items);
// console.log(items[2]);

// items[2].style.color = 'Red';
// items[2].textContent = 'Hello';

// const listItems = document.querySelector ('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// document.getElementsByTagName();
let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[0].textContent = 'Hello';

// CONVERT HTMML COLLECTION INTO ARRAY
lis = Array.from(lis);

// lis.reverse();
lis.forEach(function(li, index){
    console.log(li.className);
    li.textContent = `${index}: Hey`;
});
// console.log(lis);


// // Arrow function
// lis.forEach((li, index) => {
//     console.log(li.className);
//     li.textContent = ` ${index}: Hey arrow function`;
// });



// // document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: hello`;
// });


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(function(li, index){
    li.style.background = 'cyan';
});

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'yellow';
}

console.log(items);
