import React from 'react';
import { Navbar } from '../../components/navbar/navBar';
import { Footer } from '../../components/footer/footer';
import HeroSection from '../universityDetail/heroSection/heroSection';
import UniversityHeader from '../universityDetail/universityHeader/universityHeader';
import Overview from '../universityDetail/overview/overview';
import Courses from '../universityDetail/courses/courses';
import Societies from '../universityDetail/joinSocieties/joinSocieties';
import StudyCircles from '../universityDetail/studyCircles/studyCircle';
import './UniversityDetail.css';

export default function UniversityDetail(){
  return (
    <div className="university-detail">
        <Navbar />
        <HeroSection />
        <UniversityHeader />
        <Overview />
        <Courses />
        <Societies />
        <StudyCircles />
        <Footer />
    </div>
  );
};


