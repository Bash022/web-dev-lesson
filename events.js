
// document.querySelector('.clear-task').addEventListener("click", function(e){

//     alert('Hello');
//     e.preventDefault();

// });

document.querySelector('.clear-task').addEventListener('click', onClick);

function onClick(e){
    // console.log('hello');
    let val;

    val = e;
    // Event target element
    val = e.target;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;
    // Timestamp
    val = e.timeStamp;
    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;




    console.log(val);
}