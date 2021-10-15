import { stack as Burger } from 'react-burger-menu';
import { NavLink, useLocation } from 'react-router-dom';
import React, { useState, useContext } from 'react';

// const MyContext = React.createContext();

// const Navigation = () => {
//   const ctx = useContext(MyContext);

//   return (
//     <Burger
//       customBurgerIcon={false}
//       isOpen={ctx.isMenuOpen}
//       onStateChange={(state) => ctx.stateChangeHandler(state)}
//     />
//   );
// };

// const Button = () => {
//   const ctx = useContext(MyContext);
//   return (
//     <button type="button" onClick={ctx.toggleMenu}>
//       Toggle
//     </button>
//   );
// };
// const MyProvider = () => {
//   const [menuOpenState, setMenuOpenState] = useState(false);

//   return (
//     <MyContext.Provider
//       value={{
//         isMenuOpen: menuOpenState,
//         toggleMenu: () => setMenuOpenState(!menuOpenState),
//         stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
//       }}
//     >
//       {(Button, Navigation)}
//     </MyContext.Provider>
//   );
// };

const Hamburger = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bm-wrapper" type="button" onClick={toggleMenu}>
      <Burger
        right
        className="hamburger"
        // isOpen={isOpen}
        burgerBarClassName={isOpen ? 'open' : ''}
        // menuClassName={isOpen ? '' : 'close'}
        // itemListClassName={isOpen ? '' : 'close'}
        // overlayClassName={isOpen ? '' : 'close'}
      >
        <NavLink
          className="nav__item"
          to="/"
          isActive={() => pathname === '/'}
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink className="nav__item" to="/bookshelf" onClick={toggleMenu}>
          Bookshelf
        </NavLink>
        <NavLink className="nav__item" to="/addbook" onClick={toggleMenu}>
          Add Book
        </NavLink>
      </Burger>
    </div>
  );
};

export default Hamburger;
