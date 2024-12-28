import React from 'react';
import Layout from '../../components/layout/layout';
import JoinedSocieties from './components/join-societies/join-societies';
import RecommendedSocieties from './components/recommended/recommended';
import SocietyPosts from '../society/components/society-posts/society-posts';

export default function Society() {
  return (
    <Layout>
      <JoinedSocieties />
      <RecommendedSocieties />
      <SocietyPosts />
    </Layout>
  );
}

