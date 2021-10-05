import { FaSistrix } from 'react-icons/fa';

const MobileSearch = () => {
  return (
    <div className="mobileSearch">
      <input
        className="mobileSearch__input"
        type="text"
        placeholder="Search by Title/Author"
      />
      <FaSistrix className="mobileSearch__icon" />
    </div>
  );
};

export default MobileSearch;
