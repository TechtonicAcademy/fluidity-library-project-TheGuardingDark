import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getBooks, searchBooks } from '../utils/API';
import BookCard from '../components/BookCard';
import MobileSearch from '../components/MobileSearch';

const Bookshelf = ({ searchTerm, setSearchTerm }) => {
  const term = searchTerm;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (term === '') {
      getBooks()
        .then(({ data }) => setBooks(data))
        .catch((err) => console.log(err));
    } else {
      searchBooks(term)
        .then(({ data }) => setBooks(data))
        .catch((err) => console.log(err));
    }
  }, [term]);

  return (
    <div className="bookshelf grid">
      <MobileSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1 className="bookshelf__header">Release the Kraken of Knowledge!</h1>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          firstName={book.Author.firstName}
          lastName={book.Author.lastName}
        />
      ))}
    </div>
  );
};

Bookshelf.defaultProps = {
  searchTerm: '',
  setSearchTerm: () => {},
};
Bookshelf.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default Bookshelf;
