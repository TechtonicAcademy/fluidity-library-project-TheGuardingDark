/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomPage from './CustomPage';
import CustomPub from './CustomPub';
import EmptyCard from './EmptyCard';
import Button from './Button';
import Stars from './Stars';

const BookForm = () => {
  return (
    <form className="form grid form__mobile" id="addBookForm">
      <label className="form__text form__mobile" htmlFor="title">
        Title
      </label>
      <input type="text" className="form__input form__mobile" id="title" />
      <label className="form__text form__mobile" htmlFor="author">
        Author
      </label>
      <input type="text" className="form__input form__mobile" id="author" />
      <EmptyCard className="mobile" />
      <Button
        text="Add Image"
        type="submit"
        className="mdDark addImg addImg__mobile"
      />
      <label className="form__text form__mobile" htmlFor="synopsis">
        Synopsis
      </label>
      <input
        type="text"
        className="form__input form__input--lg form__mobile form__synopsis"
        id="synopsis"
      />
      <label className="form__text form__mobile" htmlFor="published">
        Published
      </label>
      <CustomPub />
      <label
        className="form__text form__pages form__mobile form__text--pages"
        htmlFor="pages"
      >
        Pages
        <CustomPage />
      </label>
      <p className="form__text">Rating</p>
      <Stars />
    </form>
  );
};

export default BookForm;
