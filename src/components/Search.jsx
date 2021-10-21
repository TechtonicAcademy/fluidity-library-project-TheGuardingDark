import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const Search = ({ searchTerm, setSearchTerm }) => {
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

export default Search;
