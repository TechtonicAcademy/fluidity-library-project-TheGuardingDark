import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Stars from '../components/Stars';
import Jacket from '../styles/images/snuff.jpg';

const Details = () => {
  return (
    <div className="details grid">
      <div className="details__img">
        <img className="card__img" alt="Book Cover" src={Jacket} />
        <Stars className="details__img--stars" />
      </div>

      <div className="details__text">
        <h1 className="details__text--title">Snuff</h1>
        <h2 className="details__text--author">Terry Pratchett</h2>
        <h3 className="details__text--published">
          Published: October 11th, 1975
        </h3>
        <h3 className="details__text--pages">378 Pages</h3>
        <p className="details__text--synopsis">
          <q>
            Commander Sam Vimes of the Ankh-Morpork City Watch is on holiday in
            the pleasant and innocent countryside, but a body in the wardrobe
            would be far too simple. Instead he finds many, many bodies – and an
            ancient crime more terrible than murder. He is out of his
            jurisdiction, out of his depth, out of bacon sandwiches and out of
            his mind, but never out of guile. Where there is a crime there must
            be a punishment.
          </q>
        </p>
      </div>

      <div className="details__btns">
        <Link to="/editbook">
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
