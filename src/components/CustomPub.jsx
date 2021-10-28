// import { TiArrowSortedDown } from 'react-icons/ti';
import DatePicker from 'react-widgets/DatePicker';
import 'react-widgets/scss/styles.scss';
import { useState } from 'react';

const CustomPub = ({ handleDateChange, initialValue }) => {
  const [date, setDate] = useState(initialValue);

  return (
    <div htmlFor="published" className="form__label">
      <p className="form__text form__mobile">Published</p>
      <div className="form__selectPub">
        <DatePicker
          defaultValue={new Date()}
          max={new Date()}
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

export default CustomPub;
