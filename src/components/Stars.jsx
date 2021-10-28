import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Stars = ({ handleRatingChange }) => {
  const [currentRating, setCurrentRating] = useState(0);
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
                console.log('clicked', givenRating);
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
};
Stars.propTypes = {
  handleRatingChange: PropTypes.func,
};

export default Stars;
