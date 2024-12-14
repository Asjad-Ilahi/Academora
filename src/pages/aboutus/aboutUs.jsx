import React from 'react';

import { Navbar } from '../../components/navbar/navBar';
import { Hero } from './Components/heroSection/heroSection';
import { WhoAreWe } from './Components/whoAreWe/whoAreWe';
import { OurVision } from './Components/ourVision/ourVision';
import { OurMission } from './Components/ourMission/ourMission';
import { FAQ } from '../../components/faq/faq';
import { Footer } from '../../components/footer/footer';

import './aboutUs.css'; // Import the CSS file

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <WhoAreWe />
        <OurMission />
        <OurVision />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
