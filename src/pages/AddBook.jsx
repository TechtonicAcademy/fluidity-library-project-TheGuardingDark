import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { addBook } from '../utils/API';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const history = useHistory();

  const [formObj] = useState({
    // Until image functionality is set-up
    // src: '',
    title: '',
    author: '',
    synopsis: '',
    published: '',
    pages: '',
    rating: 0,
  });

  const createBook = (book) => {
    addBook(book)
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="addBook grid">
      <header className="addBook__header">Add Book</header>
      <BookForm createBook={createBook} existingBook={formObj} />
    </div>
  );
};

export default AddBook;
