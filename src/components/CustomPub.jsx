import DatePicker from 'react-widgets/DatePicker';
import PropTypes from 'prop-types';
import 'react-widgets/scss/styles.scss';
import { useState, useEffect } from 'react';
import { getBook } from '../utils/API';

const CustomPub = ({ handleDateChange, initialValue, reset, setReset, id }) => {
  const [date, setDate] = useState(initialValue);
  useEffect(() => {
    setDate(new Date());
    setReset(false);
  }, [reset]);

  useEffect(() => {
    if (id) {
      getBook(id)
        .then(({ data: book }) => setDate(new Date(book.published)))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div htmlFor="published" className="form__label">
      <p className="form__text form__mobile">Published</p>
      <div className="form__selectPub">
        <DatePicker
          defaultValue={new Date()}
          max={new Date()}
          dropUp
          name="published"
          value={date}
          valueEditFormat={{ dateStyle: 'medium' }}
          valueDisplayFormat={{ dateStyle: 'medium' }}
          onChange={(date) => {
            setDate(date);
            handleDateChange(date);
          }}
        />
      </div>
    </div>
  );
};

CustomPub.defaultProps = {
  handleDateChange: () => {},
  initialValue: new Date(),
  setReset: () => {},
  reset: false,
};

CustomPub.propTypes = {
  handleDateChange: PropTypes.func,
  initialValue: PropTypes.instanceOf(Date),
  setReset: PropTypes.func,
  reset: PropTypes.bool,
};

export default CustomPub;
