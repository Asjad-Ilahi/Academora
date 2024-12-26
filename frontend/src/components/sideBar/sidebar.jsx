import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import PopularImage from '../../assets/popular-bar.svg';
import ArrowUp from '../../assets/arrowUp-bar.svg';
import Bookmark from '../../assets/bookmark-bar.svg';
import JoinSociety from '../../assets/joinSociety-bar.svg';
import StudyCircles from '../../assets/studyCircle-bar.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Explore</h2>

      <nav className="sidebar-menu">
        <Link to="/explore" className="menu-item">
          <span className="icon">
            <img src={PopularImage} alt="Popular" />
          </span>
          Popular
        </Link>
        <a href="#recent" className="menu-item">
          <span className="icon">
            <img src={ArrowUp} alt="Popular" />
          </span>
          Recent
        </a>
        <Link to="/society" className="menu-item">
          <span className="icon">
            <img src={JoinSociety} alt="Popular" />
          </span>
          Societies
        </Link>
        <Link to="/study-circles" className="menu-item">
          <span className="icon">
            <img src={StudyCircles} alt="Popular" />
          </span>
          Study Circles
        </Link>
        <a href="#bookmark" className="menu-item">
          <span className="icon">
            <img src={Bookmark} alt="Popular" />
          </span>
          Book mark
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
