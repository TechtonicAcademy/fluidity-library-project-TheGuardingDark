import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Jacket from '../styles/images/placeholder.jpg';
import { getImg } from '../utils/API';

const BookCard = ({
  book: { id, title },
  author: { firstName, lastName },
  image: { name },
}) => {
  const [src, setSrc] = useState('');
  const pathname = useLocation();
  const path = pathname.pathname;
  const detailsPath = `/details/${id}`;
  const editPath = `/editBook/${id}`;

  useEffect(() => {
    if (!name || name === '') {
      setSrc(Jacket);
    } else {
      getImg(id).then(({ data }) => {
        const blob = new Blob([data]);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64 = reader.result;
          setSrc(base64);
        };
      });
    }
  }, [name]);

  return (
    <div className="card card__withImg">
      {path === (detailsPath || editPath) ? (
        <img
          className="card__img card__withImg--bookshelf"
          alt={title}
          src={src}
        />
      ) : (
        <Link to={`/details/${id}`} className="card__link">
          <img
            className="card__img card__withImg--bookshelf"
            alt={title}
            src={src}
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
      )}
    </div>
  );
};

BookCard.defaultProps = {
  title: '',
  firstName: '',
  lastName: '',
  book: {},
  author: {},
  image: {} || '',
};
BookCard.propTypes = {
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  book: PropTypes.objectOf(PropTypes.any),
  author: PropTypes.objectOf(PropTypes.any),
  image: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.string,
  ]),
};

export default BookCard;
