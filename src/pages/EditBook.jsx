import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBook, editBook } from '../utils/API';
import BookForm from '../components/BookForm';
import Jacket from '../styles/images/snuff.jpg';

const EditBook = () => {
  const { id } = useParams();
  const history = useHistory();

  const [book, setBook] = useState({});

  const updateBook = (book) => {
    editBook(book, id)
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBook(id)
      .then(({ data: book }) => setBook(book))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="editBook grid">
      <header className="editBook__header">Edit Book</header>
      {book.title && (
        <BookForm
          existingBook={{ ...book }}
          src={Jacket}
          updateBook={updateBook}
        />
      )}
    </div>
  );
};

export default EditBook;
