import React from 'react';
import { Hero } from './hero/hero';
import { Features } from './features/features';
import { Announcements } from './announcements/announcements';
import { Footer } from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navBar';
import './home.css';
import ChatBot from '../../components/ai/ai';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <ChatBot/>
      <Hero />
      <Features />
      <Announcements />
      <Footer />
    </div>
  )
}

