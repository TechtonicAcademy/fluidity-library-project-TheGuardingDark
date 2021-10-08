import PropTypes from 'prop-types';

const EmptyCard = ({ className }) => {
  return (
    <div className={`card blank card__${className}`}>
      <p className="blank__caption">Add Image</p>
    </div>
  );
};

EmptyCard.defaultProps = {
  className: 'card',
};
EmptyCard.propTypes = {
  className: PropTypes.string,
};

export default EmptyCard;
