// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBook } from '../utils/API';
import BookForm from '../components/BookForm';
import Jacket from '../styles/images/snuff.jpg';

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(id)
      .then(({ data: book }) => setBook(book))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="editBook grid">
      <header className="editBook__header">Edit Book</header>
      <BookForm existingBook={{ ...book }} src={Jacket} />
    </div>
  );
};

export default EditBook;
