import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const Stars = ({ handleRatingChange, reset, setReset }) => {
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    setCurrentRating(0);
    setReset(false);
  }, [reset]);

  return (
    <div className="form__rating">
      {[...Array(5)].map((_star, index) => {
        const givenRating = index + 1;
        return (
          <div className="form__rating--stars" key={givenRating}>
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
};
Stars.propTypes = {
  handleRatingChange: PropTypes.func,
  setReset: PropTypes.func,
  reset: PropTypes.bool,
};

export default Stars;
