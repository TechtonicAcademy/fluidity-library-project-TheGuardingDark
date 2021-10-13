import Button from '../components/Button';
// import EmptyCard from '../components/EmptyCard';
import BookForm from '../components/BookForm';

const AddBook = () => {
  return (
    <div className="addBook grid">
      <header className="addBook__header">Add Book</header>
      <BookForm />
      {/* <EmptyCard className="addBook__desktop" /> */}
      {/* <Button
        text="Add Image"
        type="submit"
        className="mdDark addImg addImg__desktop"
      /> */}
      <div className="addBook__btns">
        <Button
          text="Add Book"
          type="submit"
          form="addBookForm"
          className="add"
        />
        <Button text="Cancel" type="reset" className="light leftBtn" />
      </div>
    </div>
  );
};

export default AddBook;
