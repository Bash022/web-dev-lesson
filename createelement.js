// CREATE ELEMENT

const li = document.createElement('li');

// Add class

li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// CREATE text node and append

li.appendChild(document.createTextNode('Hello World'));
// create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fas fa-user-times"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);