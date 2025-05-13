import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
          />
        </Link>
      </div>

      <div className="sidebar__menu">
        <Link to="/" className={`sidebar__menuItem ${location.pathname === '/' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <i className="fas fa-home"></i>
          </div>
          <span>Home</span>
        </Link>

        <Link to="/search" className={`sidebar__menuItem ${location.pathname === '/search' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <i className="fas fa-search"></i>
          </div>
          <span>Search</span>
        </Link>

        <Link to="/explore" className={`sidebar__menuItem ${location.pathname === '/explore' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <i className="fas fa-compass"></i>
          </div>
          <span>Explore</span>
        </Link>

        <Link to="/reels" className={`sidebar__menuItem ${location.pathname === '/reels' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <i className="fas fa-film"></i>
          </div>
          <span>Reels</span>
        </Link>

        <Link to="/messages" className={`sidebar__menuItem ${location.pathname === '/messages' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <i className="fas fa-paper-plane"></i>
          </div>
          <span>Messages</span>
        </Link>

        <Link to="/notifications" className={`sidebar__menuItem ${location.pathname === '/notifications' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <i className="fas fa-heart"></i>
          </div>
          <span>Notifications</span>
        </Link>

        <Link to="/create" className={`sidebar__menuItem ${location.pathname === '/create' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <i className="fas fa-plus-square"></i>
          </div>
          <span>Create</span>
        </Link>

        <Link to="/profile" className={`sidebar__menuItem ${location.pathname === '/profile' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <img
              src="https://picsum.photos/32/32?random=profile"
              alt="Profile"
              className="sidebar__profilePic"
            />
          </div>
          <span>Profile</span>
        </Link>
      </div>

      <div className="sidebar__more">
        <Link to="/more" className={`sidebar__menuItem ${location.pathname === '/more' ? 'active' : ''}`}>
          <div className="sidebar__menuIcon">
            <i className="fas fa-bars"></i>
          </div>
          <span>More</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar; 