// script.js
document.addEventListener('DOMContentLoaded', () => {

    const bookTableBody = document.getElementById('book-table').getElementsByTagName('tbody')[0];

    const bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];

    bookmarkList.forEach((book) => {
        const row = bookTableBody.insertRow();
        row.insertCell().textContent = book.bookName;
        row.insertCell().textContent = book.authorName;
        row.insertCell().textContent = book.bookDescription;
        row.insertCell().textContent = book.addedDate;
        row.insertCell().textContent = book.bookCategory;
        row.insertCell().textContent = book.price;

    });
});