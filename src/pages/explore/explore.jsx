import React from 'react';
import Sidebar from './components/sideBar/sidebar';
import MainContent from './components/mainContent/mainContent';
import ChatBot from '../../components/ai/ai';
import './explore.css';

function Explore() {
  return (
    <div className="explore">
      <main className="explore-main-container">
        <Sidebar />
        <MainContent />
      </main>
      <ChatBot />
    </div>
  );
}

export default Explore;

