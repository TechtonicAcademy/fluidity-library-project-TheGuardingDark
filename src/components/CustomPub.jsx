/* eslint-disable jsx-a11y/control-has-associated-label */
import { TiArrowSortedDown } from 'react-icons/ti';

const CustomPub = ({ date }) => {
  return (
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
