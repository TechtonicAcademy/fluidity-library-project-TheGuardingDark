// import { TiArrowSortedDown } from 'react-icons/ti';
import DatePicker from 'react-widgets/DatePicker';
import 'react-widgets/scss/styles.scss';
import { useState } from 'react';

const CustomPub = () => {
  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <label htmlFor="published" className="form__label">
      <p className="form__text form__mobile">Published</p>
      <div className="form__selectPub">
        <DatePicker
          placeholder="m/dd/yy"
          defaultValue={new Date()}
          valueEditFormat={{ dateStyle: 'medium' }}
          valueDisplayFormat={{ dateStyle: 'medium' }}
        />
      </div>
    </label>
  );
};

export default CustomPub;
