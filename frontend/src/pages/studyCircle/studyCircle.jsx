import React from 'react';
import './studyCircle.css';
import Sidebar from '../../components/sideBar/sidebar';
import JoinedSocieties from './components/join-societies/join-societies';
import RecommendedSocieties from './components/recommended/recommended';
import SocietyPosts from './components/society-posts/society-posts';

export default function StudCircle() {
  return (
    <div className="studyCircle">
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

