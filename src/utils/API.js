import axios from 'axios';

const url = 'http://localhost:3000/books';

export const getBooks = () => {
  return axios.get(url);
};

export const getBook = (id) => {
  return axios.get(`${url}/${id}`);
};

export const searchBooks = (term) => {
  return axios.get(`${url}?q=${term}`);
};

export const addBook = (book) => {
  return axios.post(url, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
