class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        // Create tr element
        const row = document.createElement('tr');
        row.className = "u-full-width";
        // Insert columns
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
    
        list.appendChild(row);
    }

    displayBooks(books) {
        for (let i = 0; i < books.length; i++) {
            this.addBookToList(books[i]);
        }
    }

    deleteBook(clicked) {
        if (clicked.target.className === 'delete') {
            clicked.target.parentElement.parentElement.remove();
        }
    }

    validate(book) {
        return !(book.title === '' || book.author === '' || book.isbn === '');
    }

    clearFields() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    showAlert(message, className) {
        const alert = document.createElement('div');
        alert.className = `alert ${className}`;
        alert.appendChild(document.createTextNode(message))

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(alert, form);

        setTimeout(function() {
            alert.remove();
        }, 3000);
    }
}

// Local storage
class Storage {
    static saveBook(book) {
        localStorage.setItem(book.isbn, JSON.stringify(book));
        console.log("added: " + book);
    }
    static loadBooks() {
        let bookArray = [];
        for (let i = 0; i < localStorage.length; i++) {
            bookArray.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        return bookArray;
    }
    static removeBook(clicked) {
        if (clicked.target.className === 'delete') {
            let isbn = clicked.target.parentElement.parentElement.children[2].innerHTML
            localStorage.removeItem(isbn);
        }
    }
}

if (localStorage.length > 0) {
    console.log("Restoring books");
    let ui = new UI();
    ui.displayBooks(Storage.loadBooks());
}
document.getElementById('book-form').addEventListener('submit',
function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    console.log('isbn #' + Number.parseInt(isbn));
          
     // Instantiate Book
    const book = new Book(title, author, isbn);
    // Instantiate UI
    const ui = new UI();

    if (!ui.validate(book)) {
        ui.showAlert('Please fill in all fields', 'error');
        return;
    }
    ui.addBookToList(book);
    Storage.saveBook(book);
    ui.showAlert('Book added', 'success')

    
    ui.clearFields();
});

document.getElementById('book-list').addEventListener('click', function(e) {
    e.preventDefault();
    const ui = new UI();
    ui.deleteBook(e);
    Storage.removeBook(e);
});