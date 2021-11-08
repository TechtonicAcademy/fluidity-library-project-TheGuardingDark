import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import CustomPage from './CustomPage';
import CustomPub from './CustomPub';
import EmptyCard from './EmptyCard';
import Button from './Button';
import Stars from './Stars';

const BookForm = ({ createBook, existingBook, src, updateBook }) => {
  const pathname = useLocation();
  const { id } = useParams();
  const path = pathname.pathname;
  const editPath = `/editBook/${id}`;

  const [reset, setReset] = useState(false);
  const [validTitle, setValidTitle] = useState(true);
  const [validAuthor, setValidAuthor] = useState(true);

  const titleRef = document.getElementById('title');
  const authorRef = document.getElementById('author');

  const [formObj, setFormObj] = useState({
    // Until image functionality is set-up
    // src: '',
    title: '',
    author: '',
    synopsis: '',
    published: '',
    pages: 0,
    rating: 0,
  });

  useEffect(() => {
    if (existingBook) {
      setFormObj(existingBook);
    }
  }, [existingBook]);

  const { rating, title, author, synopsis, pages, published } = formObj;

  const resetForm = () => {
    if (id) {
      setFormObj({ ...existingBook });
      setReset(true);
      setValidAuthor(true);
      setValidTitle(true);
    } else {
      setFormObj({
        ...formObj,
        // Until image functionality is set-up
        // src: '',
        title: '',
        author: '',
        synopsis: '',
        published: new Date(),
        pages: 300,
        rating: 0,
      });
      setReset(true);
      setValidAuthor(true);
      setValidTitle(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
    if (title !== '' || author !== '') {
      setValidAuthor(true);
      setValidTitle(true);
    }
  };

  const handleRatingChange = (givenRating) => {
    setFormObj({ ...formObj, rating: givenRating });
  };

  const handleDateChange = (date) => {
    setFormObj({ ...formObj, published: date });
  };

  const handlePagesChange = (page) => {
    setFormObj({ ...formObj, pages: page });
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();

    const book = { ...formObj, id: shortid.generate() };

    if (title !== '' && author !== '') {
      if (id) {
        updateBook(book, id);
      }
      createBook(book);
      resetForm();
    } else if (title === '' && author === '') {
      setValidTitle(false);
      titleRef.focus();
      setValidAuthor(false);
    } else if (title === '') {
      setValidTitle(false);
      titleRef.focus();
    } else {
      setValidAuthor(false);
      authorRef.focus();
    }
  };

  return (
    <form
      className="form grid form__mobile"
      id="addBookForm"
      onSubmit={handleBookSubmit}
      onReset={resetForm}
    >
      <label className="form__label" htmlFor="title">
        <p className="form__text form__text--title form__mobile"> Title </p>
        <input
          type="text"
          id="title"
          className="form__input form__input--title form__mobile"
          placeholder=""
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        {validTitle ? (
          ''
        ) : (
          <p className="form__err form__err--title">Title is Required</p>
        )}
      </label>
      <label className="form__label" htmlFor="author">
        <p className="form__text form__text--author form__mobile">Author</p>
        <input
          type="text"
          id="author"
          className="form__input form__input--author form__mobile"
          placeholder=""
          value={author}
          name="author"
          onChange={handleInputChange}
        />
        {validAuthor ? '' : <p className="form__err">Author is Required</p>}
      </label>
      <EmptyCard src={src} className="form blank" />
      <Button
        text={`${src ? 'Change Image' : 'Add Image'}`}
        type="submit"
        className="mdDark addChangeImg"
      />
      <label className="form__label" htmlFor="synopsis">
        <p className="form__text form__mobile">Synopsis</p>
        <textarea
          type="text"
          id="synopsis"
          className="form__input form__input--lg form__mobile form__synopsis"
          placeholder=""
          value={synopsis}
          name="synopsis"
          onChange={handleInputChange}
        />
      </label>
      <CustomPub
        handleDateChange={handleDateChange}
        reset={reset}
        setReset={setReset}
        id={id}
        savedPub={published}
      />
      <CustomPage
        handlePagesChange={handlePagesChange}
        reset={reset}
        setReset={setReset}
        id={id}
        savedPages={pages}
      />
      <p className="form__text">Rating</p>
      <Stars
        handleRatingChange={handleRatingChange}
        reset={reset}
        setReset={setReset}
        rating={rating}
        id={id}
      />
      <div className="addBook__btns">
        <Button
          text={path === editPath ? 'Edit Book' : 'Add Book'}
          type="submit"
          form="addBookForm"
          className="add rightBtn"
        />
        <Button
          form="addBookForm"
          text="Reset"
          type="reset"
          className="light leftBtn"
          onClick={resetForm}
        />
      </div>
    </form>
  );
};

BookForm.defaultProps = {
  createBook: () => {},
  existingBook: {},
  updateBook: () => {},
  src: '',
};

BookForm.propTypes = {
  createBook: PropTypes.func,
  existingBook: PropTypes.objectOf(PropTypes.any),
  updateBook: PropTypes.func,
  src: PropTypes.string,
};

export default BookForm;
