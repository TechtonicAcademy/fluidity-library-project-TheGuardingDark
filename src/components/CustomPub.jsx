/* eslint-disable jsx-a11y/control-has-associated-label */
import { useRef } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

const CustomPub = ({ date }) => {
  const publishedInputRef = useRef();
  const addPublished = publishedInputRef.current.value.trim();

  return (
    <label htmlFor="published" className="form__label">
      <p className="form__text form__mobile">Published</p>
      <div className="form__selectPub">
        <TiArrowSortedDown className="form__selectPub--arrow" />
        <select
          type="select"
          id="published"
          className="form 
          form__input 
          form__input--sm 
          form__mobile
          form__selectPub--input"
        ref={publishedInputRef}
        addPublished={addPublished}
      >
        <option value="0">{date}</option>
        <option value="1">02/14/1975</option>
        <option value="2">10/31/2020</option>
        <option value="3">07/08/1990</option>
      </select>
    </div>
  );
};

export default CustomPub;
