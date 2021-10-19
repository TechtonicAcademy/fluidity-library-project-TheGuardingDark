import { useState, useEffect } from 'react';
import { getBooks } from '../utils/API';
import BookCard from '../components/BookCard';
import MobileSearch from '../components/MobileSearch';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then(({ data: books }) => setBooks(books))
      .catch((err) => console.log(err));
  }, []);

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

export default Bookshelf;
