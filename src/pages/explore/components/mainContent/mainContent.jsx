import React from 'react';
import './mainContent.css';

function MainContent() {
  return (
    <div className="main-main-content">
      <div className="venture-header">
        <div className="venture-graphics">
          <img src="/vr-headset.svg" alt="VR" className="vr-icon" />
        </div>
        <h1 className="venture-title">Venture</h1>
      </div>

      <div className="search-container main-search">
        <input 
          type="text" 
          className="search-input"
          placeholder="Type here"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="main-university-cards">
        <div className="main-university-card">
          <img src="/nust.jpg" alt="NUST University" />
          <div className="main-card-content">
            <h3>NUST University Admission</h3>
            <span className="status">Open</span>
            <p className="date">Last Date: 27-11-24</p>
          </div>
        </div>

        <div className="main-university-card">
          <img src="/comsats.jpg" alt="COMSATS University" />
          <div className="main-card-content">
            <h3>COMSATS University Admission</h3>
            <span className="status">Open</span>
            <p className="date">Last Date: 19-12-24</p>
          </div>
        </div>
      </div>

      <div className="posts">
        <div className="post">
          <div className="post-header">
            <img src="/avatar.svg" alt="User" className="post-avatar" />
            <div className="post-info">
              <span className="username">Azhar</span>
              <span className="tag">Add</span>
            </div>
            <span className="time">8 hr ago</span>
          </div>
          <div className="post-content">
            <p>What's the best society to join for networking at [Your University]?</p>
            <div className="post-stats">
              <span>👍 300</span>
              <span>💬 12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

