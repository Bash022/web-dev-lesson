// document.getElementById();

// console.log(document.getElementById('task-title'));
//  Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// // Change Styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// Change content 
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Task';
taskTitle.innerHTML = '<span style = "color:red">Task List</span>';

// $('task-title'); // jquery


// document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title')); 
console.log(document.querySelector('h5')); 


document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'blue';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(even)').style.background = 'cyan';