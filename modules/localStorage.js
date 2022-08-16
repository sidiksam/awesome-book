class Books {
  static getfromLS = () => (localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [])

  static idGenerator = () => {
    const books = Books.getfromLS();
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    return id;
  }

  static add = (book) => {
    const books = Books.getfromLS();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    Books.display(book);
  }

  static remove = (id) => {
    const books = Books.getfromLS();
    const filteredBooks = books.filter((book) => book.id.toString() !== id.toString());
    localStorage.setItem('books', JSON.stringify(filteredBooks));
  }

  static display = (book) => {
    const bookList = document.querySelector('.bookCard');
    const bookcontainer = document.createElement('div');
    bookcontainer.className = 'bookCardFlex';
    bookcontainer.innerHTML = `
      <h3 class="book-title">${book.title}</h3>
      <p class="bookAbout">${book.author}</p>
      <button id= "${book.id}" type="button" class="buttonRemove">Remove</button>
    `;
    bookList.appendChild(bookcontainer);
  }

   static onLoad = () => {
     const books = Books.getfromLS();
     books.forEach((book) => {
       Books.display(book);
     });
   }
}

export default Books;