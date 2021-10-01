const Button = ({ text, type }) => {
  return (
    <button type={type} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
