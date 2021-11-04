import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const Stars = ({
  handleRatingChange,
  reset,
  setReset,
  className,
  id,
  rating,
}) => {
  const pathname = useLocation();
  const path = pathname.pathname;
  const detailsPath = `/details/${id}`;
  const bookRating = rating;
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    setCurrentRating(0);
    setReset(false);
  }, [reset]);

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
};
Stars.propTypes = {
  handleRatingChange: PropTypes.func,
  setReset: PropTypes.func,
  reset: PropTypes.bool,
  className: PropTypes.string,
};

export default Stars;
