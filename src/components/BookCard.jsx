import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Jacket from '../styles/images/snuff.jpg';

const BookCard = ({ book: { id, src, title, author } }) => {
  return (
    <div className="card card__withImg">
      <Link to={`/details/${id}`} className="card__link">
        <img
          className="card__img card__withImg--bookshelf"
          alt={title}
          src={Jacket}
        />
        <div className="card__container">
          <h2 className="card__container--title">{title}</h2>
          <h3 className="card__container--author">{author}</h3>
        </div>
      </Link>
    </div>
  );
};

BookCard.defaultProps = {
  src: Jacket,
  title: '',
  author: '',
};
BookCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookCard;
