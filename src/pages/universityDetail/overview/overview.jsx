import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="overview-content">
        <div className="overview-text">
          <div className="description-bar"></div>
          <p>
            Established in 1998, CUI has grown into a Multi-Campus University 
            offering Cutting-Edge Programs in Engineering, Computer Sciences, 
            Management, and Social Sciences. With a Strong Emphasis On 
            Fostering Critical Thinking And Innovation, COMSATS Ranks Among 
            The Top Universities In Pakistan And Asia, Known For Its Culture By 
            Producing Skilled Graduates And Groundbreaking Research.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">📅</div>
            <div className="stat-details">
              <div className="stat-label">Established Year</div>
              <div className="stat-value">1998</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">👥</div>
            <div className="stat-details">
              <div className="stat-label">Total Students Enrolled</div>
              <div className="stat-value">36000</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🏆</div>
            <div className="stat-details">
              <div className="stat-label">Ranking in Pakistan</div>
              <div className="stat-value">4th</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🌏</div>
            <div className="stat-details">
              <div className="stat-label">Ranking in Asia</div>
              <div className="stat-value">126</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
