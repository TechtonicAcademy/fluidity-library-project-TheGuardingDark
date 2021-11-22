import axios from 'axios';

const url = 'http://localhost:8080/api/books';

export const getBooks = () => {
  return axios.get(url);
};

export const getBook = (id) => {
  return axios.get(`${url}/${id}`);
};

export const searchBooks = (term) => {
  return axios.get(`${url}/search/?query=${term}`);
};

export const addBook = (book) => {
  return axios.post(url, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const editBook = (book, id) => {
  return axios.put(`${url}/${id}`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteBook = (id) => {
  return axios.delete(`${url}/${id}`);
};

export const uploadImg = (form, id) => {
  return axios.post(`${url}/upload/${id}`, form, {
    headers: {
      'Content-Type': 'multipart/form-data, boundary="-XXX-"',
    },
  });
};
