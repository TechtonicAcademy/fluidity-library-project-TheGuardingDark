import { FaSistrix } from 'react-icons/fa';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const MobileSearch = ({ setSearchTerm }) => {
  const inputRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    setSearchTerm(term);
    inputRef.current.value = '';
  };

  return (
    <form className="mobileSearch" onSubmit={handleSearch}>
      <input
        type="text"
        className="mobileSearch__input"
        placeholder="Search by Title/Author"
        ref={inputRef}
      />
      <FaSistrix className="mobileSearch__icon" onClick={handleSearch} />
    </form>
  );
};

MobileSearch.defaultProps = {
  setSearchTerm: () => {},
};
MobileSearch.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default MobileSearch;
