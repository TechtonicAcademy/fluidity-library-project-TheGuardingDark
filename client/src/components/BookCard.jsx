import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Jacket from '../styles/images/placeholder.jpg';

const BookCard = ({
  book: { id, title, src },
  author: { firstName, lastName },
}) => {
  console.log(src);
  return (
    <div className="card card__withImg">
      <Link to={`/details/${id}`} className="card__link">
        <img
          className="card__img card__withImg--bookshelf"
          alt={title}
          src={src || Jacket}
        />
        <div className="card__container">
          <h2 className="card__container--title">{title}</h2>
          <h3 className="card__container--author">
            {firstName}
            &nbsp;
            {lastName}
          </h3>
        </div>
      </Link>
    </div>
  );
};

BookCard.defaultProps = {
  title: '',
  firstName: '',
  lastName: '',
  book: {},
  author: {},
  src: '../styles/images/placeholder.jpg',
};
BookCard.propTypes = {
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  book: PropTypes.objectOf(PropTypes.any),
  author: PropTypes.objectOf(PropTypes.any),
  // src: PropTypes.oneOf([PropTypes.string, PropTypes.objectOf(PropTypes.any)]),
};

export default BookCard;
