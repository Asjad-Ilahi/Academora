import React from 'react';
import Layout from '../../components/layout/layout';
import JoinedSocieties from './components/join-societies/join-societies';
import RecommendedSocieties from './components/recommended/recommended';
import SocietyPosts from './components/society-posts/society-posts';
// import './studyCircle.css';

export default function StudCircle() {
  return (
    <Layout>
      <JoinedSocieties />
      <RecommendedSocieties />
      <SocietyPosts />
    </Layout>
  );
}
