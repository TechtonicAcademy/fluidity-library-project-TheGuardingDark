import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Stars = ({ className }) => {
  return (
    <div className={`form__rating form__rating--${className}`} id="rating">
      <FaStar type="button" key="1" className="form__rating--star" />
      <FaStar type="button" key="2" className="form__rating--star" />
      <FaStar type="button" key="3" className="form__rating--star" />
      <FaStar type="button" key="4" className="form__rating--star" />
      <FaStar
        type="button"
        key="5"
        className="form__rating form__rating--unchecked"
      />
    </div>
  );
};

Stars.defaultProps = {
  className: ' ',
};
Stars.propTypes = {
  className: PropTypes.string,
};

export default Stars;
