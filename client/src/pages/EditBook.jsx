import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBook, editBook } from '../utils/API';
import BookForm from '../components/BookForm';
// import Jacket from '../styles/images/snuff.jpg';

const EditBook = () => {
  const { id } = useParams();
  const history = useHistory();

  const [formObj, setFormObj] = useState({});
  const [noImg, setNoImg] = useState(true);

  const updateBook = (novel, bookId) => {
    // console.log('Novel is: ', novel);
    const novelJSON = {
      id: novel.id,
      title: novel.title,
      firstName: novel.firstName,
      lastName: novel.lastName,
      published: novel.published,
      rating: novel.rating,
      pages: novel.pages,
    };
    // console.log(novelJSON);
    editBook(novelJSON, bookId);
    history.push('/bookshelf');
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
      .then(() => {
        setNoImg(formObj.imageFile);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="editBook grid">
      <header className="editBook__header">Edit Book</header>
      {formObj.title && (
        <BookForm
          existingBook={formObj}
          updateBook={updateBook}
          noImg={noImg}
        />
      )}
    </div>
  );
};

export default EditBook;
