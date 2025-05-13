import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img 
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" className="header__search" />
      </div>
      <div className="header__right">
        <Link to="/messages" className="header__icon">
          <i className="far fa-paper-plane"></i>
        </Link>
        <Link to="/explore" className="header__icon">
          <i className="far fa-compass"></i>
        </Link>
        <Link to="/activity" className="header__icon">
          <i className="far fa-heart"></i>
        </Link>
        <Link to="/profile" className="header__icon">
          <i className="far fa-user"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header; 