import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <container className="details">
      <h1>Details</h1>
      <Link to="/editbook">
        <button type="button">Edit Book</button>
      </Link>
    </container>
  );
};

export default Details;
