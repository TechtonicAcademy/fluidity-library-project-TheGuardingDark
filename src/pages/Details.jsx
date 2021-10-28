import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBook } from '../utils/API';
import Button from '../components/Button';
import Stars from '../components/Stars';
import Jacket from '../styles/images/snuff.jpg';
import EmptyCard from '../components/EmptyCard';

const Details = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const { title, author, synopsis, published, pages } = book;

  useEffect(() => {
    getBook(id)
      .then(({ data: book }) => setBook(book))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="details grid">
      <h1 className=" details__text details__text--title">{title}</h1>
      <EmptyCard src={Jacket} className="form details__img" />
      <h2 className="details__text details__text--author mobile">{author}</h2>
      <h3 className="details__text details__text--rating mobile">Rating</h3>

      <Stars className="details" type="checked" />
      <h2 className="details__text details__text--author desktop">{author}</h2>

      <h3 className=" details__text details__text--published">
        Published: {published}
      </h3>
      <h3 className="details__text details__text--pages">{pages} Pages</h3>
      <p className="details__text details__text--synopsis">
        <q>{synopsis}</q>
      </p>

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
