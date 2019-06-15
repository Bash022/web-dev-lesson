let val;

// val = document;
// val = document.all;
// val = document.all[1];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.URL;
// val = document.domain;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0].method;
// val = document.links[0].className;
// val = document.links[0].classList;
val = document.images;
val = document.scripts;
console.log(val);

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});



