import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Jacket from '../styles/images/snuff.jpg';

const BookCard = ({ src, title, author }) => {
  return (
    <div className="card">
      <Link to="/details">
        <img className="card__img" alt={title} src={src} />
      </Link>
      <div className="card__container">
        <h2 className="card__container--title">{title}</h2>
        <h3 className="card__container--author">{author}</h3>
      </div>
    </div>
  );
};

// replace in next sprint to loop through books and render one card for each

BookCard.defaultProps = {
  src: Jacket,
  title: 'Snuff',
  author: 'Terry Pratchett',
};
BookCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookCard;
