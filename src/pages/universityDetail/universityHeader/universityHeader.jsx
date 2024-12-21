import React from 'react';
import './UniversityHeader.css';
import Logo from '../../../assets/logo.svg';
const UniversityHeader = () => {
  return (
    <div className="university-header">
      <div className="university-text">
        <h1>COMSATS <span>University</span></h1>
        <div className="university-description">
          <div className="description-bar"></div>
          <p>
            COMSATS University Islamabad (CUI) is a leading institution of higher education in Pakistan, 
            renowned for its commitment to academic excellence, research innovation, and a student-centered approach.
          </p>
        </div>
      </div>
      <div className="university-logo">
        <img src={Logo} alt="COMSATS University Logo" />
      </div>
    </div>
  );
};

export default UniversityHeader;
