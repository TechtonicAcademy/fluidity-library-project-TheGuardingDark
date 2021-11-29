import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { addBook, getBook, uploadImg } from '../utils/API';
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

  const checkAndLoad = (img, id) => {
    getBook(id)
      .then(({ data }) => {
        if (data) {
          uploadImg(img, id);
        }
      })
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log('Upload Img error: ', err));
  };

  const createBook = (book, img, id) => {
    const novelJSON = {
      id: book.id,
      title: book.title,
      synopsis: book.synopsis,
      firstName: book.firstName,
      lastName: book.lastName,
      published: book.published,
      rating: book.rating,
      pages: book.pages,
    };
    addBook(novelJSON)
      .then(() => {
        checkAndLoad(img, id);
      })
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
