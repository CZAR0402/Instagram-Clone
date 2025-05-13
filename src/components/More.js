import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './More.css';

function More() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleLogout = () => {
    // Here you would typically handle logout logic (clearing tokens, etc.)
    navigate('/login');
  };

  return (
    <div className="more">
      <div className="more__container">
        <div className="more__header">
          <h2>Settings and privacy</h2>
        </div>

        <div className="more__section">
          <h3>Account</h3>
          <div className="more__options">
            <div className="more__option">
              <i className="fas fa-user"></i>
              <span>Personal information</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="more__option">
              <i className="fas fa-lock"></i>
              <span>Security</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="more__option">
              <i className="fas fa-bell"></i>
              <span>Notifications</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="more__option">
              <i className="fas fa-eye"></i>
              <span>Privacy</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="more__section">
          <h3>Preferences</h3>
          <div className="more__options">
            <div className="more__option">
              <i className="fas fa-moon"></i>
              <span>Dark mode</span>
              <div className="more__toggle">
                <input 
                  type="checkbox" 
                  id="darkMode" 
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <label htmlFor="darkMode"></label>
              </div>
            </div>
            <div className="more__option">
              <i className="fas fa-language"></i>
              <span>Language</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="more__option">
              <i className="fas fa-globe"></i>
              <span>Region</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="more__section">
          <h3>Support</h3>
          <div className="more__options">
            <div className="more__option">
              <i className="fas fa-question-circle"></i>
              <span>Help Center</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="more__option">
              <i className="fas fa-info-circle"></i>
              <span>About</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="more__option">
              <i className="fas fa-bug"></i>
              <span>Report a problem</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="more__logout">
          <button className="more__logoutButton" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default More; 