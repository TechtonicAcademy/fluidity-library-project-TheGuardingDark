import { Link, useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBook, deleteBook } from '../utils/API';
import Button from '../components/Button';
import Stars from '../components/Stars';
import BookCard from '../components/BookCard';

const Details = () => {
  const history = useHistory();
  const [book, setBook] = useState({});
  const { id } = useParams();
  const {
    title,
    firstName,
    lastName,
    synopsis,
    published,
    pages,
    rating,
    imageFile,
  } = book;

  const p = new Date(published);
  const month = p.getMonth() + 1;
  const day = p.getDate();
  const year = p.getFullYear();

  useEffect(() => {
    getBook(id)
      .then(({ data }) =>
        setBook({
          ...data,
          firstName: data.Author.firstName,
          lastName: data.Author.lastName,
          imageFile: data.Image || '',
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const deleteThisBook = () => {
    deleteBook(id)
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="details grid">
      <h1 className=" details__text details__text--title">{title}</h1>
      <BookCard
        image={imageFile}
        book={book}
        className="form disabled details__img"
      />
      <h2 className="details__text details__text--author mobile">
        {firstName}
        &nbsp;
        {lastName}
      </h2>
      <h3 className="details__text details__text--rating mobile">Rating</h3>

      <Stars className="details" id={id} bookRating={rating} />
      <h2 className="details__text details__text--author desktop">
        {firstName}
        &nbsp;
        {lastName}
      </h2>

      <h3 className=" details__text details__text--published">
        Published: {published ? `${month}/${day}/${year}` : ''}
      </h3>
      <h3 className="details__text details__text--pages">
        {pages || ''} Pages
      </h3>
      <p className="details__text details__text--synopsis">
        <q>{synopsis}</q>
      </p>
      <Button
        text="Delete Book"
        className="delete"
        type="button"
        onClick={deleteThisBook}
      />

      <div className="details__btns">
        <Link to={`/editBook/${id}`}>
          <Button text="Edit This Book" type="button" className="editBtn" />
        </Link>
        <Link to="/bookshelf">
          <Button
            text="Back to Shelf"
            type="button"
            className="light backBtn leftBtn"
          />
        </Link>
      </div>
    </div>
  );
};

export default Details;
