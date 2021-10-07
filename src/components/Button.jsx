const Button = ({ text, type, className }) => {
  return (
    <button type={type} className={`btn btn__${className}`}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
