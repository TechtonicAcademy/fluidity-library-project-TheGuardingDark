import { TiArrowUnsorted } from 'react-icons/ti';

const CustomPage = ({ handleInputChange, pages }) => {
  return (
    <label htmlFor="pages" className="form__label--pages">
      <p className="form__text form__pages form__mobile form__text--pages">
        Pages
      </p>
      <div className="form__selectPage">
        <TiArrowUnsorted className="form__selectPage--arrow" />
        <input
          type="text"
          inputMode="numeric"
          id="pages"
          min="0"
          className="
        form__input form__input--sm form__mobile"
          placeholder=""
          value={pages}
          name="pages"
          onChange={handleInputChange}
        />
      </div>
    </label>
  );
};

export default CustomPage;
