import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import PopularImage from '../../assets/popular-bar.svg';
import ArrowUp from '../../assets/arrowUp-bar.svg';
import Bookmark from '../../assets/bookmark-bar.svg';
import JoinSociety from '../../assets/joinSociety-bar.svg';
import StudyCircles from '../../assets/studyCircle-bar.svg';
import CreatePostIcon from '../../assets/plus.svg'; // Icon for Create Post

function Sidebar() {
  const location = useLocation(); // Get current location
  const [activeItem, setActiveItem] = useState(location.pathname); // Set initial state based on the path

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <aside className="sidebar">
      <h2>Explore</h2>

      <nav className="sidebar-menu">
        <Link
          to="/explore"
          className={`menu-item ${activeItem === '/explore' ? 'active' : ''}`}
          onClick={() => handleItemClick('/explore')}
        >
          <span className="icon">
            <img src={PopularImage} alt="Popular" />
          </span>
          Popular
        </Link>
        <a
          href="#recent"
          className={`menu-item ${activeItem === '/#recent' ? 'active' : ''}`}
          onClick={() => handleItemClick('/#recent')}
        >
          <span className="icon">
            <img src={ArrowUp} alt="Recent" />
          </span>
          Recent
        </a>
        <Link
          to="/society"
          className={`menu-item ${activeItem === '/society' ? 'active' : ''}`}
          onClick={() => handleItemClick('/society')}
        >
          <span className="icon">
            <img src={JoinSociety} alt="Society" />
          </span>
          Societies
        </Link>
        <Link
          to="/study-circles"
          className={`menu-item ${activeItem === '/study-circles' ? 'active' : ''}`}
          onClick={() => handleItemClick('/study-circles')}
        >
          <span className="icon">
            <img src={StudyCircles} alt="Study Circles" />
          </span>
          Study Circles
        </Link>
        <Link
          to="/bookmark"
          className={`menu-item ${activeItem === '/bookmark' ? 'active' : ''}`}
          onClick={() => handleItemClick('/bookmark')}
        >
          <span className="icon">
            <img src={Bookmark} alt="Bookmark" />
          </span>
          Bookmark
        </Link>
        <Link
          to="/create-post"
          className={`menu-item ${activeItem === '/create-post' ? 'active' : ''}`}
          onClick={() => handleItemClick('/create-post')}
        >
          <span className="icon">
            <img src={CreatePostIcon} width={20} alt="Create Post" />
          </span>
          Create Post
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
