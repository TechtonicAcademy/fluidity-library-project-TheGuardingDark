import NumberPicker from 'react-widgets/NumberPicker';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getBook } from '../utils/API';

const CustomPage = ({ handlePagesChange, reset, setReset, id, savedPages }) => {
  const [pages, setPages] = useState(300);

  useEffect(() => {
    if (id) {
      setPages(savedPages);
      setReset(false);
    } else {
      setPages(300);
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    if (id) {
      getBook(id)
        .then(({ data: book }) => setPages(book.pages))
        .catch((err) => console.log(err));
    }
  }, [id]);

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
          onChange={(page) => {
            setPages(page);
            handlePagesChange(page);
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
  savedPages: 0,
  id: '',
};

CustomPage.propTypes = {
  handlePagesChange: PropTypes.func,
  setReset: PropTypes.func,
  reset: PropTypes.bool,
  savedPages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
};

export default CustomPage;
