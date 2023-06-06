import { useState } from "react";
import Socials from "../Socials/Socials";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  function toggleNavbar() {
    setShowNavbar((prev) => {
      return (prev = !prev);
    });
  }
  return (
    <header className={`bm-header ${showNavbar ? " show" : ""}`} id='bm-header'>
      <div className='bm-header-wrapper'>
        <button
          className='navbar-toggler ${showNavbar ? "show" : ""}'
          type='button'
          aria-label='Toggle navigation'
          onClick={toggleNavbar}
        >
          <i className='fas fa-bars'></i>
        </button>
        <div className='bm-site-header'>
          <div className='mb-3 mx-auto bm-site-logo'>
            <i className='fas fa-gamepad fa-2x'></i>
          </div>
          <h1 className='text-center'>GG code</h1>
        </div>
        <Navigation />
        <Socials />
      </div>
    </header>
  );
};

export default Header;
