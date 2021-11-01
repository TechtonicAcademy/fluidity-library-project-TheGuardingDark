import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import CustomPage from './CustomPage';
import CustomPub from './CustomPub';
import EmptyCard from './EmptyCard';
import Button from './Button';
import Stars from './Stars';

const BookForm = ({ createBook }) => {
  const [reset, setReset] = useState(false);
  const [formObj, setFormObj] = useState({
    src: '',
    title: '',
    author: '',
    synopsis: '',
    published: '',
    pages: '',
    rating: 0,
  });
  const { src, title, author, synopsis } = formObj;

  const clearForm = () => {
    setFormObj({
      ...formObj,
      src: '',
      title: '',
      author: '',
      synopsis: '',
      published: new Date(),
      pages: 300,
      rating: 0,
    });
    setReset(true);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const book = { ...formObj, id: shortid.generate() };
    createBook(book);
    clearForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
  };

  const handleRatingChange = (givenRating) => {
    setFormObj({ ...formObj, rating: givenRating });
  };

  const handleDateChange = (date) => {
    setFormObj({ ...formObj, published: date });
  };

  const handlePagesChange = (pages) => {
    setFormObj({ ...formObj, pages });
  };

  return (
    <form
      className="form grid form__mobile"
      id="addBookForm"
      onSubmit={handleBookSubmit}
      onReset={clearForm}
    >
      <label className="form__label" htmlFor="title">
        <p className="form__text form__text--title form__mobile"> Title </p>
        <input
          type="text"
          required
          id="title"
          className="form__input form__input--title form__mobile"
          placeholder=""
          value={title}
          name="title"
          onChange={handleInputChange}
        />
      </label>
      <label className="form__label" htmlFor="author">
        <p className="form__text form__text--author form__mobile">Author</p>
        <input
          type="text"
          required
          id="author"
          className="form__input form__input--author form__mobile"
          placeholder=""
          value={author}
          name="author"
          onChange={handleInputChange}
        />
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
      />
      <CustomPage
        handlePagesChange={handlePagesChange}
        reset={reset}
        setReset={setReset}
      />
      <p className="form__text">Rating</p>
      <Stars
        handleRatingChange={handleRatingChange}
        reset={reset}
        setReset={setReset}
      />
      <div className="addBook__btns">
        <Button
          text="Add Book"
          type="submit"
          form="addBookForm"
          className="add rightBtn"
        />
        <Button
          form="addBookForm"
          text="Cancel"
          type="reset"
          className="light leftBtn"
          onClick={clearForm}
        />
      </div>
    </form>
  );
};

BookForm.defaultProps = {
  createBook: () => {},
};

BookForm.propTypes = {
  createBook: PropTypes.func,
};

export default BookForm;
