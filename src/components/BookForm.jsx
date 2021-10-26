import PropTypes from 'prop-types';
import CustomPage from './CustomPage';
import CustomPub from './CustomPub';
import EmptyCard from './EmptyCard';
import Button from './Button';
import Stars from './Stars';

const BookForm = ({ src, title, author, synopsis, published, pages }) => {
  return (
    <form className="form grid form__mobile" id="addBookForm">
      <label htmlFor="title" className="form__label">
        <p className="form__text form__text--title form__mobile">Title</p>
        <input
          type="text"
          className="form__input form__input--title form__mobile"
          id="title"
          placeholder={title}
        />
      </label>
      <label htmlFor="author" className="form__label">
        <p className="form__text form__text--author form__mobile">Author </p>
        <input
          type="text"
          className="form__input form__input--author form__mobile"
          id="author"
          placeholder={author}
        />
      </label>
      <EmptyCard src={src} className="form blank" />
      <Button
        text={`${src ? 'Change Image' : 'Add Image'}`}
        type="submit"
        className="mdDark addChangeImg"
      />
      <label htmlFor="synopsis" className="form__label">
        <p className="form__text form__mobile">Synopsis</p>
        <textarea
          type="text"
          className="form__input form__input--lg form__mobile form__synopsis"
          id="synopsis"
          placeholder={synopsis}
        />
      </label>
      <CustomPub date={published} />
      <CustomPage pages={pages} />
      <p className="form__text">Rating</p>
      <Stars type={`${src ? 'checked' : 'unchecked'}`} />
    </form>
  );
};

BookForm.defaultProps = {
  src: '',
  title: '',
  author: '',
  synopsis: '',
  published: '',
  pages: null,
};

BookForm.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  synopsis: PropTypes.string,
  published: PropTypes.string,
  pages: PropTypes.number,
};

export default BookForm;
