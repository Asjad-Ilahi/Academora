import React from 'react';
import './mainContent.css';
import Nust from '../../../../assets/comsats.svg';
import HeroSection from '../heroSection/heroSection';
import SearchBar from '../searchbar/searchBar';
import Post from '../../../../components/posts/post'

function MainContent() {
  return (
    <div className="main-main-content">

      <HeroSection />

      <SearchBar />

      <div className="main-university-cards">
        <div className="main-university-card">
          <img src={Nust} alt="NUST University" />
          <div className="main-card-content">
            <h3>NUST University Admission</h3>
            <span className="status">Open</span>
            <p className="date">Last Date: 27-11-24</p>
          </div>
        </div>

        <div className="main-university-card">
          <img src={Nust} alt="COMSATS University" />
          <div className="main-card-content">
            <h3>COMSATS University Admission</h3>
            <span className="status">Open</span>
            <p className="date">Last Date: 19-12-24</p>
          </div>
        </div>
      </div>
      <Post/>
    </div>
  );
}

export default MainContent;

