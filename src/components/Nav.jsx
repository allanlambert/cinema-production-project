import React from 'react';
import logo from '../assets/creative-cinema-production-logo_23-2149509983.avif';
import { Link } from 'react-router-dom';
import Menu from '../ui/Menu';

function Nav() {
  return (
    <nav className='nav__container'>
      <figure className='nav__logo--wrapper'>
        <Link to={`/`}>
        <img src={logo} alt="logo" className='nav__logo' />
        </Link>
        <span className='nav__logo--title'>CINEMA PRODUCTION</span>
      </figure>
      <Menu />
      <ul className='nav__links--wrapper'>
        <li className='nav__links'>
          <Link to="/" className='nav__link'>Home</Link>
        </li>
        <li className='nav__links'>
          <a href="#" className='nav__link not-allowed'>About</a>
        </li>
        <li className='nav__links'>
          <Link to="/explore" className='nav__link'>Explore</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
