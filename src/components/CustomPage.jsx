import { TiArrowUnsorted } from 'react-icons/ti';

const CustomPage = ({ pages }) => {
  return (
    <div className="form__selectPage">
      <TiArrowUnsorted className="form__selectPage--arrow" />
      <input
        type="text"
        inputMode="numeric"
        id="pages"
        min="0"
        className="
        form__input form__input--sm form__mobile"
        name="pages"
        placeholder={pages}
      />
    </div>
  );
};

export default CustomPage;
