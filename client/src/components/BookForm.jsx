import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { uploadImg } from '../utils/API';
import CustomPage from './CustomPage';
import CustomPub from './CustomPub';
import EmptyCard from './EmptyCard';
import BookCard from './BookCard';
import Button from './Button';
import Stars from './Stars';

const form = new FormData();

const clearObj = {
  title: '',
  firstName: '',
  lastName: '',
  synopsis: '',
  published: '',
  pages: 0,
  rating: 0,
  src: '',
};

const BookForm = ({ createBook, existingBook, updateBook }) => {
  const pathname = useLocation();
  const { id } = useParams();
  const path = pathname.pathname;
  const editPath = `/editBook/${id}`;
  const [reset, setReset] = useState(false);
  const [validTitle, setValidTitle] = useState(true);
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);

  const titleRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const [formObj, setFormObj] = useState(clearObj);

  const bookId = id || shortid.generate();

  const [image, setImage] = useState('');

  useEffect(() => {
    if (existingBook) {
      setFormObj(existingBook);
    }
  }, [existingBook]);

  const {
    rating,
    title,
    firstName,
    lastName,
    synopsis,
    pages,
    published,
    // src,
  } = formObj;

  const valid = () => {
    setValidTitle(true);
    setValidFirstName(true);
    setValidLastName(true);
  };

  const resetForm = () => {
    if (id) {
      setFormObj({ ...existingBook });
      setReset(true);
      valid();
    } else {
      setFormObj(clearObj);
      setReset(true);
      valid();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
    if (title !== '' || firstName !== '' || lastName !== '') {
      valid();
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

  const previewImage = () => {
    const imgFile = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const imageName = reader.result;
      setImage(imageName);
    });
    reader.readAsDataURL(imgFile);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();

    if (image) {
      const bookImg = document.querySelector('input[type=file]').files[0];
      form.set('bookImg', bookImg, bookImg.name);
    }

    const book = { ...formObj, id: bookId };

    if (title !== '' && firstName !== '' && lastName !== '') {
      if (id) {
        updateBook(book, id);
        uploadImg(form, id);
      } else {
        createBook(book);
        uploadImg(form, bookId);
      }

      resetForm();
    } else if (title === '' && firstName === '' && lastName === '') {
      setValidTitle(false);
      titleRef.current.focus();
      setValidFirstName(false);
      setValidLastName(false);
    } else if (title === '') {
      setValidTitle(false);
      titleRef.current.focus();
    } else if (lastName === '') {
      setValidLastName(false);
      lastNameRef.current.focus();
    } else {
      setValidFirstName(false);
      firstNameRef.current.focus();
    }
  };

  return (
    <>
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
            ref={titleRef}
            onChange={handleInputChange}
          />
          {validTitle ? (
            ''
          ) : (
            <p className="form__err form__err--title">Title is Required</p>
          )}
        </label>

        <label className="form__author" htmlFor="firstName">
          <p className="form__text form__text--author form__mobile">Author</p>
          <input
            type="text"
            id="firstName"
            className="form__input form__input--firstName form__mobile"
            placeholder="First Name"
            value={firstName}
            name="firstName"
            ref={firstNameRef}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="lastName"
            className="form__input form__input--lastName form__mobile"
            placeholder="Last Name"
            value={lastName}
            name="lastName"
            ref={lastNameRef}
            onChange={handleInputChange}
          />
          {validFirstName && validLastName ? (
            ''
          ) : (
            <p className="form__err">Author Full Name is Required</p>
          )}
        </label>
        <label className="form__label" htmlFor="synopsis">
          <p className="form__text form__mobile form__text--synopsis">
            Synopsis
          </p>
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
        <p className="form__text form__text--rating">Rating</p>
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

      <form encType="multipart/form-data" className="form__img">
        {existingBook ? (
          <BookCard
            image={existingBook.Image}
            book={existingBook}
            className="form details__img"
          />
        ) : (
          <EmptyCard src={image} className="form blank" />
        )}
        <input
          type="file"
          name="bookImg"
          className="form__inputFiles"
          accepts="image/*"
          multiple={false}
          onChange={previewImage}
        />
      </form>
    </>
  );
};

BookForm.defaultProps = {
  createBook: () => {},
  existingBook: {},
  updateBook: () => {},
};

BookForm.propTypes = {
  createBook: PropTypes.func,
  existingBook: PropTypes.objectOf(PropTypes.any),
  updateBook: PropTypes.func,
};

export default BookForm;
