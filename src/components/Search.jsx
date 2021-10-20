import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// import { searchBooks } from '../utils/API';
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
    <form className="search" onSubmit={handleSearch}>
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
