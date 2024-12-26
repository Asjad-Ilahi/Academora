import React from 'react';
import Sidebar from '../../components/sideBar/sidebar';
import MainContent from './components/mainContent/mainContent';
import './explore.css';

function Explore() {
  return (
    <div className="explore">
      <main className="explore-main-container">
        <Sidebar />
        <MainContent />
      </main>
    </div>
  );
}

export default Explore;

