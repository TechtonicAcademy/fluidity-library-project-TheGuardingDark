import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

const Search = ({ setSearchTerm }) => {
  const inputRef = useRef();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    setSearchTerm(term);
    history.push({
      pathname: '/bookshelf',
    });
    inputRef.current.value = '';
  };

  return (
    <form className="nav__form" onSubmit={handleSearch}>
      <input
        type="text"
        className="nav__search"
        placeholder="Search by Title/Author"
        ref={inputRef}
      />
      <Button text="Search" type="submit" />
    </form>
  );
};

Search.defaultProps = {
  setSearchTerm: () => {},
};
Search.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Search;
