import React from 'react';
import './society.css';
import Sidebar from '../../components/sideBar/sidebar';
import JoinedSocieties from './components/join-societies/join-societies';
import RecommendedSocieties from './components/recommended/recommended';
import SocietyPosts from './components/society-posts/society-posts';

export default function Society() {
  return (
    <div className="Society">
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <JoinedSocieties />
          <RecommendedSocieties />
          <SocietyPosts />
        </main>
      </div>
    </div>
  );
}

