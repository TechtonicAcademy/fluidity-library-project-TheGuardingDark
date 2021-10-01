import { Link } from 'react-router-dom';

const Bookshelf = () => {
  return (
    <div className="bookshelf">
      <h1>Bookshelf</h1>
      <Link to="/details">
        <button type="button">Book Details</button>
      </Link>
    </div>
  );
};

export default Bookshelf;
