import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { addBook } from '../utils/API';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const history = useHistory();

  const [formObj] = useState({
    title: '',
    firstName: '',
    lastName: '',
    synopsis: '',
    published: '',
    pages: 0,
    rating: 0,
    imageFile: {},
  });

  const createBook = (book) => {
    addBook(book)
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err, book));
  };

  return (
    <div className="addBook grid">
      <header className="addBook__header">Add Book</header>
      {!formObj.title && (
        <BookForm createBook={createBook} existingBook={formObj} />
      )}
    </div>
  );
};

export default AddBook;
