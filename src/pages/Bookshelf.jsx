import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getBooks, searchBooks } from '../utils/API';
import BookCard from '../components/BookCard';
import MobileSearch from '../components/MobileSearch';

const Bookshelf = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  // console.log(searchTerm);
  const term = searchTerm;

  useEffect(() => {
    if (term === '') {
      getBooks()
        .then(({ data: books }) => setBooks(books))
        .catch((err) => console.log(err));
    } else {
      searchBooks(term)
        .then(({ data: books }) => setBooks(books))
        .catch((err) => console.log(err));
    }
  }, [term]);

  return (
    <div className="bookshelf grid">
      <MobileSearch />
      <h1 className="bookshelf__header">Release the Kraken of Knowledge!</h1>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

Bookshelf.defaultProps = {
  searchTerm: '',
};
Bookshelf.propTypes = {
  searchTerm: PropTypes.string,
};

export default Bookshelf;
