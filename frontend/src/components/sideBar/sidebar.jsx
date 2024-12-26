import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Explore</h2>

      <nav className="sidebar-menu">
      <Link to="/explore" className="menu-item">
          <span className="icon">🔥</span>
          Popular
        </Link>
        <a href="#recent" className="menu-item">
          <span className="icon">🕒</span>
          Recent
        </a>
        <Link to="/society" className="menu-item">
          <span className="icon">📢</span>
          Societies
        </Link>
        <Link to="/study-circles" className="menu-item">
          <span className="icon">📚</span>
          Study Circles
        </Link>
        <a href="#bookmark" className="menu-item">
          <span className="icon">🔖</span>
          Book mark
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
