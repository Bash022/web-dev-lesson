// Book Constructor

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI User Interface Constructor
class UI {
    constructor() {
    }
    // Add book to list
    addBookToList(book) {
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
    }
    // Show alert
    showAlert(message, className) {
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
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    // Delete Book
    deleteBook(target) {
        if (target.className === 'delete') {
            // console.log('delete');
            target.parentElement.parentElement.remove();
        }
    }
    // clear fields
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}


// Local Storage Class
class Store {
    static getBooks(){
        let books;

        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI;
            ui.addBookToList(book);
        });
    }
    static addBook(book){
        const books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks);

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
    // delete book
    ui.deleteBook(e.target);
    // Remove from LS
    Store.removeBook();


    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
     
    // Add book to list
    ui.addBookToList(book);
    // Success
    ui.showAlert('Book added', 'success');
    // Add to LS
    Store.addBook(book);
    // Clear field
    ui.clearFields();


   
    } 
    e.preventDefault();

});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    // instantiate ui consturctor
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show alert
    ui.showAlert('Book removed!', 'success');
});

