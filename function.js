// FUNCTION DECLARATION

// to determine - function keyword, function name, with () and {}

function greet(firstName = 'John', lastName = 'Doe') {
    if(typeof firstName === 'undefined'){
        firstName = 'John';
    }
    if(typeof lastName === 'undefined'){
        lastName = 'Doe';
    }
    // console.log('Hello');
    // return 'Hello' + firstName + ' ' + lastName;
    return `Hello ${firstName} ${lastName}`;
}
console.log(greet());


// FUNCTION EXPRESSIONS
//  to determine - variable const, declare name, with () and {}

const square = function(x = 3) {
    return x * x;
}

console.log(square());

// Immdiately Invokable function expressions - IIFE's
// to determine - two ()()
(function(){
    console.log('IIFE Ran..')
})();

(function(name){
    console.log('Hello ' + name);
})('bob');

// Property Methods

const todo = {
    add: function () {
        console.log('Add todo..');
    },
    edit:function (id) {
        console.log(`Edit todo ${id}`);
    }
};

todo.delete = function(){
    console.log('Delete todo..');
}
todo.add();
todo.edit();
console.log('dvevev');

