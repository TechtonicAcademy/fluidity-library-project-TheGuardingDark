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

  useEffect(() => {
    getBook(id)
      .then(({ data: book }) => setBook(book))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="details grid">
      <h1 className=" details__text details__text--title">{book.title}</h1>
      <EmptyCard src={Jacket} className="form details__img" />
      <h2 className="details__text details__text--author mobile">
        {book.author}
      </h2>
      <h3 className="details__text details__text--rating mobile">Rating</h3>

      <Stars className="details" type="checked" />
      <h2 className="details__text details__text--author desktop">
        {book.author}
      </h2>

      <h3 className=" details__text details__text--published">
        Published: {book.published}
      </h3>
      <h3 className="details__text details__text--pages">{book.pages} Pages</h3>
      <p className="details__text details__text--synopsis">
        <q>
          {book.synopsis}
          {/* Commander Sam Vimes of the Ankh-Morpork City Watch is on holiday in
          the pleasant and innocent countryside, but a body in the wardrobe
          would be far too simple. Instead he finds many, many bodies – and an
          ancient crime more terrible than murder. He is out of his
          jurisdiction, out of his depth, out of bacon sandwiches and out of his
          mind, but never out of guile. Where there is a crime there must be a
          punishment. */}
        </q>
      </p>

      <div className="details__btns">
        <Link to={`/editBook:${id}`}>
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
