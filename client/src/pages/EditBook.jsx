import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBook, editBook } from '../utils/API';
import BookForm from '../components/BookForm';
// import Jacket from '../styles/images/snuff.jpg';

const EditBook = () => {
  const { id } = useParams();
  const history = useHistory();

  const [formObj, setFormObj] = useState({});

  const updateBook = (novel) => {
    editBook(novel, id)
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBook(id)
      .then(({ data: novel }) => {
        setFormObj({
          ...novel,
          firstName: novel.Author.firstName,
          lastName: novel.Author.lastName,
          imageFile: novel.Image || '',
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="editBook grid">
      <header className="editBook__header">Edit Book</header>
      {formObj.title && (
        <BookForm existingBook={formObj} updateBook={updateBook} />
      )}
    </div>
  );
};

export default EditBook;
