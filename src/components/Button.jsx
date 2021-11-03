import PropTypes from 'prop-types';

const Button = ({ text, type, className, onClick }) => {
  return (
    <button type={type} className={`btn btn__${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  text: '',
  className: '',
  onClick: () => {},
};
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
