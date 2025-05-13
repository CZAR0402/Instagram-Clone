import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    // For now, we'll just navigate to home
    navigate('/');
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
          />
        </div>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__inputGroup">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login__inputGroup">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login__button">
            Log in
          </button>

          <div className="login__divider">
            <span>OR</span>
          </div>

          <div className="login__facebook">
            <i className="fab fa-facebook-square"></i>
            <span>Log in with Facebook</span>
          </div>

          <div className="login__forgot">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </form>
      </div>

      <div className="login__signup">
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <div className="login__app">
        <p>Get the app.</p>
        <div className="login__appLinks">
          <a href="#" className="login__appLink">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt="App Store"
            />
          </a>
          <a href="#" className="login__appLink">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt="Google Play"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login; 