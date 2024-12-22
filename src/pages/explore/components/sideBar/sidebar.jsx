import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Explore</h2>
      
      <nav className="sidebar-menu">
        <a href="#popular" className="menu-item">
          <span className="icon">🔥</span>
          Popular
        </a>
        <a href="#recent" className="menu-item">
          <span className="icon">🕒</span>
          Recent
        </a>
        <a href="#announcements" className="menu-item">
          <span className="icon">📢</span>
          Announcements
        </a>
        <a href="#events" className="menu-item">
          <span className="icon">📅</span>
          Events
        </a>
        <a href="#bookmark" className="menu-item">
          <span className="icon">🔖</span>
          Book mark
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;

