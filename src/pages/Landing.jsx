import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <h1>Landing</h1>
      <Link to="/bookshelf">
        <button type="button">See Books</button>
      </Link>
      <Link to="/addbook">
        <button type="button">Add a Book</button>
      </Link>
    </div>
  );
};

export default Landing;
