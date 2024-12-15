import React, { useState } from 'react';
import './signUp.css';
import googleIcon from '../../assets/google-icon.svg';
import SideImage from '../../assets/our_mission.svg';

export function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
  };

  return (
    <div className="signup-container">
      <div className="form-section">
        <h1>Get Started <span className='highlight'> Now </span></h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">
              Forgot password
            </a>
          </div>

          <button type="submit" className="signup-button">
            Sign up
          </button>

          <button 
            type="button" 
            className="google-button"
            onClick={handleGoogleSignUp}
          >
            <img src={googleIcon} alt="Google icon" />
            Sign up with Google
          </button>

          <p className="login-link">
            Already have an account? <a href="/login">Log-in</a>
          </p>
        </form>
      </div>
      <div className="illustration-section">
        <img 
          src={SideImage} 
          alt="Education illustration" 
          className="main-illustration"
        />
      </div>
    </div>
  );
}

