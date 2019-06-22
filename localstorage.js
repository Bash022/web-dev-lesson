// // SET LOCAL STORAGE ITEM

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // set session storage item
// sessionStorage.setItem('name', 'Doe');

// // remove from storage
// localStorage.removeItem('name');

// // Get from storage
// const name = localStorage.getItem('age');
// console.log('age');

// // Clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    // console.log(task);

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
        
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');

    // e.preventDefault();

});

// delete.addEventListener('submit', function(e){


// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//     console.log(task);

// });