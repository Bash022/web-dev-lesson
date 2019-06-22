// DEFINE UI VARS

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter= document.querySelector('#filter');
const taskInput = document.querySelector('#task');




// OTHER WAY
// //const form = document.querySelector('#task-form'),
//     taskList = document.querySelector('.collection'),
//     clearBtn = document.querySelector('.clear-tasks'),
//     filter= document.querySelector('#filter'),
//     taskInput = document.querySelector('#task');




// Load all event listeners
loadEventListeners();

// Load all event listener
function loadEventListeners() {
    // // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

// Remove task event
    taskList.addEventListener('click', removeTask);

// Clear task Event
    clearBtn.addEventListener('click', clearTask);

// // Filter Task Event
    filter.addEventListener('keyup', filterTask);
};



    // GET TASK FROM LS
    function getTasks(){

        let tasks;

        if(localStorage.getItem('tasks') === null){
            tasks = [];
        } else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    
        tasks.forEach(function(task){

        // Create li element
        const li = document.createElement('li');

        // Add class
        li.className = 'collection-item';

        // CReate text node and append to li
        li.appendChild(document.createTextNode(task));

        // Crete new link element
        const link = document.createElement('a');

        // Add class
        link.className = 'delete-item secondary-content';

        // Add icon html
        link.innerHTML = '<i class= "fa fa-trash"></i>';

        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);


    });
};



// Add Task
function addTask(e){

    if(taskInput.value === ''){
        alert('Add a Task');
    } else {

        // Create li element
        const li = document.createElement('li');

        // Add class
        li.className = 'collection-item';

        // Create text Node and append to li
        li.appendChild(document.createTextNode(taskInput.value));

        // Create link
        const link = document.createElement('a');

        // Add class
        link.className = 'delete-item secondary-content';

        // Add icon
        link.innerHTML = '<i class="far fa-trash-alt"></i>';

        // Apppend to the link to li
        li.appendChild(link);
        document.querySelector('ul.collection').appendChild(li);

        // Store in LS
        storeTaskInLocalStorage(taskInput.value);

        // Clear input
        taskInput.value = '';
        e.preventDefault();

    }
}



function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
    tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}



// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            console.log(task);
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTask(){

    taskList.innerHTML = '';
    // while(taskList.firstChild) {
    //     taskList.removeChild(taskList.firstChild);
    // }
    clearTasksFromLocalStorage();
    }
    function clearTasksFromLocalStorage() {
        localStorage.clear();
    }


function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }   
    });
}
