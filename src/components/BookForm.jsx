
import PropTypes from 'prop-types';
import { addBook } from '../utils/API';
import CustomPage from './CustomPage';
import CustomPub from './CustomPub';
import EmptyCard from './EmptyCard';
import Button from './Button';
import Stars from './Stars';

const BookForm = ({ src, title, author, synopsis, published, pages }) => {
  // const history = useHistory();
  // const titleInputRef = useRef();
  // const authorInputRef = useRef();
  // const synopsisInputRef = useRef();

  // const handleBookSubmit = (e) => {
  //   e.preventDefault();
  //   const title = titleInputRef.current.value.trim();
  //   const author = authorInputRef.current.value.trim();
  //   const synopsis = synopsisInputRef.current.value.trim();
  //   // const published = publishedInputRef.current.value.trim();
  //   // const pages = pagesInputRef.current.value.trim();

  //   if (!title || !author) {
  //     // do something;
  //   }

  //   addBook({ title, author, synopsis, published, pages })
  //     .then(() => history.push('/bookshelf'))
  //     .catch((err) => console.log(err));
  // };

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
      <input
        type="text"
        id="title"
        className="form__input form__input--title form__mobile"
        placeholder={title}
        ref={titleInputRef}
      />
      <label
        className="form__text form__text--author form__mobile"
        htmlFor="author"
      >
        Author
      </label>
      <input
        type="text"
        id="author"
        className="form__input form__input--author form__mobile"
        placeholder={author}
        ref={authorInputRef}
      />
      <EmptyCard src={src} className="form blank" />
      <Button
        text={`${src ? 'Change Image' : 'Add Image'}`}
        type="submit"
        className="mdDark addChangeImg"
      />
      <label className="form__text form__mobile" htmlFor="synopsis">
        Synopsis
      </label>
      <textarea
        type="text"
        id="synopsis"
        className="form__input form__input--lg form__mobile form__synopsis"
        placeholder={synopsis}
        ref={synopsisInputRef}
      />
      <label className="form__text form__mobile" htmlFor="published">
        Published

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
