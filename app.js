class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
      
        const books = Store.getbooks();

        books.forEach((book) => UI.addbooktolist(book));
    }
    static addbooktolist(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button class="delete" style=" color:red">X</button></td>
        `;

        list.appendChild(row);

    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        // insert alert above form
        const container = document.querySelector('#form-items');
        const form = document.querySelector('#formm');
        container.insertBefore(div, form);

        // Remove alert after 3 seconds
        setTimeout(() => div.remove(), 3000);
    }


    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearfeild() {
        document.querySelector('#Title').value = '';
        document.querySelector('#Author').value = '';
        document.querySelector('#ISBN').value = '';
    }


};


class Store{
   static getbooks(){
    let books;
    if(localStorage.getItem('books') === null){
        books=[];
    }else{
       books= JSON.parse(localStorage.getItem('books'));
    }
    return books;
}

   static addbook(book){
    const books = Store.getbooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
   }
  
   static removebook(isbn){
     const books = Store.getbooks();
    
      books.forEach((book,index) => {
        if(book.isbn === isbn){
            books.splice(index,1);
        }
      });

     localStorage.setItem('books',JSON.stringify(books));
    
    
   }

}


document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#formm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#Title').value;
    const author = document.querySelector('#Author').value;
    const isbn = document.querySelector('#ISBN').value;

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill all the details', 'danger');
    } else {
        const bookk = new Book(title, author, isbn);
        Store.addbook(bookk);
        UI.addbooktolist(bookk);
        UI.showAlert('Book Added Successfully', 'success');
        UI.clearfeild();
    }
});


document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Store.removebook(e.target.parentElement.previousElementSibling.textContent);
UI.showAlert('Book list Reomove','success');

})  