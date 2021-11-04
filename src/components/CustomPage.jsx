import NumberPicker from 'react-widgets/NumberPicker';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const CustomPage = ({ handlePagesChange, reset, setReset }) => {
  const [pages, setPages] = useState(300);
  useEffect(() => {
    setPages(300);
    setReset(false);
  }, [reset]);

  return (
    <div htmlFor="pages" className="form__label--pages">
      <p className="form__text form__pages form__mobile form__text--pages">
        Pages
      </p>
      <div className="form__selectPage">
        <NumberPicker
          defaultValue={300}
          min={1}
          value={pages}
          name="pages"
          onChange={(pages) => {
            setPages(pages);
            handlePagesChange(pages);
          }}
        />
      </div>
    </div>
  );
};

CustomPage.defaultProps = {
  handlePagesChange: () => {},
  setReset: () => {},
  reset: false,
};

CustomPage.propTypes = {
  handlePagesChange: PropTypes.func,
  setReset: PropTypes.func,
  reset: PropTypes.bool,
};

export default CustomPage;
