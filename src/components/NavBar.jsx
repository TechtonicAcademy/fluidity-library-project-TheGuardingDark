import { Link, NavLink, useLocation } from 'react-router-dom';
import Search from './Search';
import Button from './Button';
import Hamburger from './Hamburger';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <header className="nav grid">
      <Link className="nav__item nav__mobile" to="/">
        <h1 className="nav__item--header">The Library</h1>
      </Link>
      <nav className="nav__links">
        <NavLink className="nav__item" to="/" isActive={() => pathname === '/'}>
          Home
        </NavLink>
        <NavLink className="nav__item" to="/bookshelf">
          Bookshelf
        </NavLink>
        <NavLink className="nav__item" to="/addbook">
          Add Book
        </NavLink>
      </nav>
      <Search />
      <Button />
      <Hamburger />
    </header>
  );
};

export default NavBar;
