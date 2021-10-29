import { useState } from 'react';
import shortid from 'shortid';
// import PropTypes from 'prop-types';
import CustomPage from './CustomPage';
import CustomPub from './CustomPub';
import EmptyCard from './EmptyCard';
import Button from './Button';
import Stars from './Stars';

const BookForm = ({ createBook }) => {
  const [formObj, setFormObj] = useState({
    src: '',
    title: '',
    author: '',
    synopsis: '',
    published: '',
    pages: '',
    rating: 0,
  });
  const { src, title, author, synopsis, rating } = formObj;

  const handleBookSubmit = (e) => {
    e.preventDefault();
    // console.log('book added');
    const book = { ...formObj, id: shortid.generate() };
    createBook(book);
    setFormObj({
      ...formObj,
      src: '',
      title: '',
      author: '',
      synopsis: '',
      published: '',
      pages: '',
      rating: 0,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
  };

  const handleRatingChange = (givenRating) => {
    setFormObj({ ...formObj, rating: givenRating });
    // console.log(formObj);
  };

  const handleDateChange = (date) => {
    setFormObj({ ...formObj, published: date });
    // console.log(formObj);
  };

  const handlePagesChange = (pages) => {
    setFormObj({ ...formObj, pages });
    console.log(formObj);
  };

  return (
    <form
      className="form grid form__mobile"
      id="addBookForm"
      onSubmit={handleBookSubmit}
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
        initialValue={new Date()}
        handleDateChange={handleDateChange}
      />
      <CustomPage handlePagesChange={handlePagesChange} />
      <p className="form__text">Rating</p>
      <Stars handleRatingChange={handleRatingChange} rating={rating} />
      <Button
        text="Add Book"
        type="submit"
        form="addBookForm"
        className="add"
      />
    </form>
  );
};

BookForm.defaultProps = {
  src: '',
  title: '',
  author: '',
  synopsis: '',
  published: '',
  pages: null,
};

// BookForm.propTypes = {
//   src: PropTypes.string,
//   title: PropTypes.string,
//   author: PropTypes.string,
//   synopsis: PropTypes.string,
//   published: PropTypes.string,
//   pages: PropTypes.number,
// };

export default BookForm;
