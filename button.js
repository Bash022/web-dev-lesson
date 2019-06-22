const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
// const er = document.querySelector('.container');

// Click
// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// clearBtn.addEventListener('mouseleave', runEvent);
// clearBtn.addEventListener('mouseover', runEvent);
// clearBtn.addEventListener('mouseout', runEvent);
// clearBtn.addEventListener('mousemove', runEvent);
card.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX}
    MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},
        ${e.offsetY}, 40)`;


};