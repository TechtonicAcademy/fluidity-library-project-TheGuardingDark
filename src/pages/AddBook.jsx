import { useHistory } from 'react-router-dom';
import { addBook } from '../utils/API';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const history = useHistory();

  const createBook = (book) => {
    addBook(book)
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="addBook grid">
      <header className="addBook__header">Add Book</header>
      <BookForm createBook={createBook} />
    </div>
  );
};

export default AddBook;
