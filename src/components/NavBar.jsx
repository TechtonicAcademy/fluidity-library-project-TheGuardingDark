import { Link, NavLink, useLocation } from 'react-router-dom';
// import Button from './Button';
import Search from './Search';
import Hamburger from './Hamburger';

const NavBar = ({ searchTerm, setSearchTerm }) => {
  const searchTermDefault = '';
  const { pathname } = useLocation();

  const clearSearch = () => {
    setSearchTerm(searchTermDefault);
  };
  return (
    <header className="nav grid">
      <Link
        className="nav__item nav__mobile"
        to="/"
        onClick={() => clearSearch()}
      >
        <h1 className="nav__item--header">The Library</h1>
      </Link>
      <nav className="nav__links">
        <NavLink
          className="nav__item"
          to="/"
          isActive={() => pathname === '/'}
          onClick={() => clearSearch()}
        >
          Home
        </NavLink>
        <NavLink
          className="nav__item"
          to="/bookshelf"
          onClick={() => clearSearch()}
        >
          Bookshelf
        </NavLink>
        <NavLink
          className="nav__item"
          to="/addbook"
          onClick={() => clearSearch()}
        >
          Add Book
        </NavLink>
      </nav>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hamburger />
    </header>
  );
};

export default NavBar;
