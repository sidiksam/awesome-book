import Books from './modules/localStorage.js';

import Bookslibrary from './modules/books.js';

import { DateTime } from './luxon.js';

document.querySelector('.bookCard').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    Books.remove(e.target.id);
  }
});

document.querySelector('form').addEventListener('submit', () => {
  const id = Books.idGenerator();
  const newBook = new Bookslibrary(id, document.querySelector('.title').value, document.querySelector('.author').value);
  Books.add(newBook);
  document.querySelector('.title').value = '';
  document.querySelector('.author').value = '';
});

const addNewPage = document.querySelector('.bookAdderSection');
const addListPage = document.querySelector('.bookListSection');
const contactPage = document.querySelector('.contactSection');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.displayNewBook').addEventListener('click', () => {
    addListPage.classList.add('active');
    addNewPage.classList.add('active');
    contactPage.classList.remove('active');
  });

  document.querySelector('.displayList').addEventListener('click', () => {
    contactPage.classList.remove('active');
    addListPage.classList.remove('active');
    addNewPage.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.displayContact').addEventListener('click', () => {
    contactPage.classList.add('active');
    addListPage.classList.add('active');
    addNewPage.classList.remove('active');
  });
});

const Time = document.querySelector('.time');
Time.textContent = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED,
);
Books.onLoad();