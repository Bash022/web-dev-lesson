const form = document.querySelector('form');
const taskInput = document.querySelector('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// const col = document.querySelector('.collection');


// Clear Input
taskInput.value = '';

form.addEventListener('submit', runEvent);

// // KeyDown
// taskInput.addEventListener('keydown', runEvent);

// // KeyUp
// taskInput.addEventListener('keyup', runEvent);

// // Key Press
// taskInput.addEventListener('keypress', runEvent);

// Key focus
// taskInput.addEventListener('focus', runEvent);

// Key blur
// taskInput.addEventListener('blur', runEvent);

// // Cut
// taskInput.addEventListener('cut', runEvent);

// // Paste
// taskInput.addEventListener('paste', runEvent);

// // Input
// taskInput.addEventListener('input', runEvent);

// // Change
// taskInput.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);

    heading.innerText = e.target.value;

    console.log(taskInput.value);
    // col.innerText = e.target.value;

    e.preventDefault();

}