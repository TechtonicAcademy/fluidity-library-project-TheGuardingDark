import PropTypes from 'prop-types';

const Button = ({ text, type, className }) => {
  return (
    <button type={type} className={`btn btn__${className}`}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  text: '',
  className: '',
};
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
