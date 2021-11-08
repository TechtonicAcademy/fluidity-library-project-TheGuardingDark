import { stack as Burger } from 'react-burger-menu';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Hamburger = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, handleMenu] = useState(false);

  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };

  return (
    <>
      <Burger
        right
        className="hamburger"
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
      >
        <NavLink
          className="nav__item"
          onClick={() => handleCloseMenu()}
          to="/"
          isActive={() => pathname === '/'}
        >
          Home
        </NavLink>
        <NavLink
          className="nav__item"
          to="/bookshelf"
          onClick={() => handleCloseMenu()}
        >
          Bookshelf
        </NavLink>
        <NavLink
          className="nav__item"
          to="/addbook"
          onClick={() => handleCloseMenu()}
        >
          Add Book
        </NavLink>
      </Burger>
    </>
  );
};

export default Hamburger;
