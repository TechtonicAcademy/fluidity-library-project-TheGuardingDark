import PropTypes from 'prop-types';
import Button from '../components/Button';
import BookForm from '../components/BookForm';
import Jacket from '../styles/images/snuff.jpg';

const EditBook = ({ src, title, author, synopsis, published, pages }) => {
  return (
    <div className="editBook grid">
      <header className="editBook__header">Edit Book</header>
      <BookForm
        src={src}
        title={title}
        author={author}
        synopsis={synopsis}
        published={published}
        pages={pages}
      />
      {/* <div className="editBook__btns">
        <Button
          text="Submit"
          type="submit"
          form="editBookForm"
          className="submit"
        />
        <Button text="Cancel" type="reset" className="light leftBtn" />
      </div> */}
    </div>
  );
};

// Passing in dummy data until db is wired up
EditBook.defaultProps = {
  src: Jacket,
  title: 'Snuff',
  author: 'Terry Pratchett',
  synopsis:
    'Commander Sam Vimes of the Ankh-Morpork City Watch is on holiday in the pleasant and innocent countryside, but a body in the wardrobe would be far too simple. Instead he finds many, many bodies –  and an ancient crime more terrible than murder. He is out of his jurisdiction, out of his depth, out of bacon sandwiches and out of his mind, but never out of guile. Where there is a crime there must be a punishment.',
  published: '10/11/2011',
  pages: 378,
};
EditBook.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  synopsis: PropTypes.string,
  published: PropTypes.string,
  pages: PropTypes.number,
};

export default EditBook;
