// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}
// UI User Interface Constructor
function UI(){

}

// Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element 
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</td>
    `;

    list.appendChild(row);

};
// Show alert
UI.prototype.showAlert = function(message, className){
    // Create div 
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    //Get a form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form); 

    // Timeout after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        // console.log('delete');
        target.parentElement.parentElement.remove();
    }
}

// clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// // Local Storage Class
// class Stor


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

    // Instantiate 
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI;

    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
     
    // Add book to list
    ui.addBookToList(book);
    // Success
    ui.showAlert('Book added', 'success');
    // Clear field
    ui.clearFields();

    e.preventDefault();
    }

});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    // instantiate ui consturctor
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Show alert
    ui.showAlert('Book removed!', 'success');
})

