import NumberPicker from 'react-widgets/NumberPicker';
import { useState } from 'react';

const CustomPage = ({ handlePagesChange }) => {
  const [pages, setPages] = useState(300);
  return (
    <div htmlFor="pages" className="form__label--pages">
      <p className="form__text form__pages form__mobile form__text--pages">
        Pages
      </p>
      <div className="form__selectPage">
        <NumberPicker
          defaultValue={300}
          min={0}
          value={pages}
          name="pages"
          // className="
          // form__input 
          // form__input--sm 
          // form__mobile"
          onChange={(pages) => {
            setPages(pages);
            handlePagesChange(pages);
          }}
        />
      </div>
    </div>
  );
};

export default CustomPage;
