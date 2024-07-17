// script.js
document.addEventListener("DOMContentLoaded", () => {
  const bookTableBody = document
    .getElementById("book-table")
    .getElementsByTagName("tbody")[0];

  let bookList = Array();
  bookList = JSON.parse(localStorage.getItem("book-list")) || [];

  bookList.forEach((book,i) => {
    const row = bookTableBody.insertRow();
    row.insertCell().textContent = book.bookName;
    row.insertCell().textContent = book.authorName;
    row.insertCell().textContent = book.bookDescription;
    row.insertCell().textContent = book.addedDate;
    row.insertCell().textContent = book.bookCategory;
    row.insertCell().textContent = book.price;
    row.insertCell().textContent = "Buy";
    row.insertCell().textContent = "Add";

    row.addEventListener("click", (e) => {
      if (e.target.textContent === "Buy") {
        const buyList = JSON.parse(localStorage.getItem("buy-list")) || [];
        buyList.push(book);

        bookList.splice(i,1);

        localStorage.setItem("buy-list", JSON.stringify(buyList));
        localStorage.setItem("book-list", JSON.stringify(bookList));
        row.remove();
      } else if (e.target.textContent === "Add") {
        const bookmarkList =
          JSON.parse(localStorage.getItem("bookmark-list")) || [];
        bookmarkList.push(book);
        bookList.splice(i,1);

        localStorage.setItem("bookmark-list", JSON.stringify(bookmarkList));
        localStorage.setItem("book-list", JSON.stringify(bookList));

        row.remove();
      }
    });
  });
});
