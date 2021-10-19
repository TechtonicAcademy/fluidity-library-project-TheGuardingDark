import PropTypes from 'prop-types';
// import Jacket from '../styles/images/StephenKingPetSematary.jpg';
import Jacket from '../styles/images/snuff.jpg';

const EmptyCard = ({ className, src }) => {
  return (
    <div className={`card card__${className}`}>
      {src ? (
        <img className="card__img" alt="Book Jacket" src={src} />
      ) : (
        <div className="card__noImg">
          <p className="card__noImg--caption">Add Image</p>
        </div>
      )}
    </div>
  );
};

EmptyCard.defaultProps = {
  className: 'card',
  src: Jacket,
};
EmptyCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

export default EmptyCard;
