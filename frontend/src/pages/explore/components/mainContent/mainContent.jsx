import React from 'react';
import './mainContent.css';
import Nust from '../../../../assets/comsats.svg';
import HeroSection from '../heroSection/heroSection';
import SearchBar from '../searchbar/searchBar';
import Post from '../../../../components/posts/post'
import { Announcements } from '../../../../components/announcements/announcements';

function MainContent() {
  return (
    <div className="main-main-content">

      <HeroSection />

      <SearchBar />

      <Post />
    </div>
  );
}

export default MainContent;

