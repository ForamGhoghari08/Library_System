// script.js
const bookForm = document.getElementById('book-form');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookData = {

        bookName: document.getElementById('book-name').value,
        authorName: document.getElementById('author-name').value,
        bookDescription: document.getElementById('book-description').value,
        addedDate: document.getElementById('added-date').value,
        bookCategory: document.getElementById('book-category').value,
        price: document.getElementById('price').value

    };

    if(bookData.price < 0) {
        alert('Price must be greater than 0');
    } else {

        const bookList = JSON.parse(localStorage.getItem('book-list')) || [];

        bookList.push(bookData);

        localStorage.setItem('book-list', JSON.stringify(bookList));

        bookForm.reset();
    }
});