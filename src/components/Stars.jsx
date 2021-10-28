// import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Stars = ({ handleRatingChange }) => {
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
              className="form__rating--unchecked"
              // givenRating > { rating } || givenRating === { rating }
              //   ? 'form__rating--checked'
              //   : 'form__rating--unchecked'
              onClick={() => {
                console.log('clicked', givenRating);
                handleRatingChange(givenRating);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stars;
