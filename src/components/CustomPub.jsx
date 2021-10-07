/* eslint-disable jsx-a11y/control-has-associated-label */
import { TiArrowSortedDown } from 'react-icons/ti';

const CustomPub = () => {
  return (
    <div className="form__selectPub">
      <TiArrowSortedDown className="form__selectPub--arrow" />
      <select
        type="select"
        id="published"
        className="form 
          form__input 
          form__input--sm 
          form__mobile"
      />
    </div>
  );
};

export default CustomPub;
