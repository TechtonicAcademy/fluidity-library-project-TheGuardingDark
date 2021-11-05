import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { getBook } from '../utils/API';

const Stars = ({
  handleRatingChange,
  reset,
  setReset,
  className,
  id,
  rating,
  bookRating,
}) => {
  const pathname = useLocation();
  const path = pathname.pathname;
  const detailsPath = `/details/${id}`;
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    if (id) {
      setCurrentRating(rating);
    } else {
      setCurrentRating(0);
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    if (id) {
      getBook(id)
        .then(({ data: book }) => setCurrentRating(book.rating))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div className={`form__rating form__rating--${className}`}>
      {[...Array(5)].map((_star, index) => {
        const givenRating = index + 1;
        return (
          <div className="form__rating--stars" key={givenRating}>
            {path === detailsPath ? (
              <FaStar
                style={{ cursor: 'default' }}
                className={
                  givenRating <= bookRating || givenRating === bookRating
                    ? 'form__rating--checked disabled'
                    : 'form__rating--unchecked disabled'
                }
              />
            ) : (
              <FaStar
                type="radio"
                role="button"
                name="rating"
                value={givenRating}
                className={
                  givenRating <= currentRating || givenRating === currentRating
                    ? 'form__rating--checked'
                    : 'form__rating--unchecked'
                }
                onClick={() => {
                  handleRatingChange(givenRating);
                  setCurrentRating(givenRating);
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

Stars.defaultProps = {
  handleRatingChange: () => {},
  setReset: () => {},
  reset: false,
  className: '',
  id: '',
  bookRating: 0,
};
Stars.propTypes = {
  handleRatingChange: PropTypes.func,
  setReset: PropTypes.func,
  reset: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  bookRating: PropTypes.number,
};

export default Stars;
