import { FaStar, FaRegStar } from 'react-icons/fa';

const Stars = () => {
  return (
    <div className="form__rating" id="rating">
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

export default Stars;
