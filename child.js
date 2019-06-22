let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

val = list.childNodes[1].nodeName;
val = list.childNodes[3].nodeType;

// Get Children of element node
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'hello';
// Children of Children
list.children[3].children[0].id = 'test-link';

val = list.children[3].children[0]; //checking

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement; //recommnded
val = listItem.parentElement.parentElement; 

// Get previous sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

val = listItem.previousElementSibling;
val = listItem.previousSibling;


console.log(val);
