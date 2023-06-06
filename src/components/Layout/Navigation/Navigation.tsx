import { NavLink, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className='bm-nav' id='bm-nav'>
      <ul>
        <li className={`bm-nav-item`}>
          <NavLink to='/' className='bm-nav-link'>
            <i className='fas fa-home'></i>
            Code Home
          </NavLink>
        </li>
        <li className='bm-nav-item'>
          <NavLink to='/post' className='bm-nav-link'>
            <i className='fas fa-pen'></i>
            Latest Post
          </NavLink>
        </li>
        <li className='bm-nav-item'>
          <NavLink to='/about' className='bm-nav-link'>
            <i className='fas fa-users'></i>
            About GG
          </NavLink>
        </li>
        <li className='bm-nav-item'>
          <NavLink to='/contact' className='bm-nav-link'>
            <i className='far fa-comments'></i>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
