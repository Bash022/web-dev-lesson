// document.getElementById('button').addEventListener('click', function(){
    
// });
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    // http verb get, post, delete and update
    // 3 parameter for xhr - verb, data from the files that needs to get, boolean
    xhr.open('GET', 'data.txt', true);
    
    
    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;

        }
    }

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //     console.log(this.responseText);
    //     }
    // }




    xhr.onerror = function(){
        console.log('Request error...');
    }

xhr.send();

// READY STATE VALUES   
// 0: request not initialize
// 1: Server connection established
// 2: request receive
// 3: processing request
// 4: request finished and response is ready


    // HTTP Statuses
    // 200: 'OK'
    // 403: "Forbidden"
    // 404: "Not Found"
}
