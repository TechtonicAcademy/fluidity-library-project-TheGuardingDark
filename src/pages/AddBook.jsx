import { useHistory } from 'react-router-dom';
import { addBook } from '../utils/API';
import Button from '../components/Button';
import BookForm from '../components/BookForm';

const AddBook = (handleBookSubmit) => {
  const history = useHistory();

  const createBook = (book) => {
    console.log('I was clicked');
    addBook(book)
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="addBook grid">
      <header className="addBook__header">Add Book</header>
      <BookForm createBook={createBook} />
      <div className="addBook__btns">
        {/* <Button
          text="Add Book"
          type="submit"
          form="addBookForm"
          className="add"
        /> */}
        <Button
          form="addBookForm"
          text="Cancel"
          type="reset"
          className="light leftBtn"
        />
      </div>
    </div>
  );
};

export default AddBook;
