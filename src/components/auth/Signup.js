import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup attempt:', { email, fullName, username, password });
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
          className="auth__logo"
        />
        <h2 className="auth__subtitle">
          Sign up to see photos and videos from your friends.
        </h2>
        <div className="auth__facebook">
          <i className="fab fa-facebook-square"></i>
          <span>Log in with Facebook</span>
        </div>
        <div className="auth__divider">
          <span>OR</span>
        </div>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth__button">
            Sign Up
          </button>
        </form>
        <p className="auth__terms">
          By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
        </p>
      </div>
      <div className="auth__signup">
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup; 