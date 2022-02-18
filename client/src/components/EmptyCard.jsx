import PropTypes from 'prop-types';

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
  src: {} || '',
};
EmptyCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.string,
  ]),
};

export default EmptyCard;
