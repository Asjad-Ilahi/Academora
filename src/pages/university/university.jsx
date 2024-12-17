import React from 'react';
import { Navbar } from '../../components/navbar/navBar';
import { Footer } from '../../components/footer/footer';
import { HeroSection } from './Components/heroSection/heroSection';
import { FilterSection } from './Components/filter/filter';
import { SearchBar } from './Components/search/search';
import { UniversityCard } from './Components/universityCard/universityCard';
import { Pagination } from './Components/pagination/pagination';
import { JoinSociety } from './Components/joinSociety/joinSociety';
import './university.css';

export default function Universities() {
  const universities = [
    {
      name: "NUST University",
      description: "NUST is a top-tier Pakistani university known for excellence in engineering, technology, and innovation, shaping future leaders",
      image: "/nust.jpg"
    },
    {
      name: "COMSATS University",
      description: "COMSATS University is a renowned institution in Pakistan, offering cutting-edge education in science, technology, and innovation",
      image: "/comsats.jpg"
    },
    // Add more universities as needed
  ];

  return (
    <div className="universities-page">
      <Navbar />
      
      <HeroSection />

      <div className="search-container">
        <FilterSection />

        <div className="search-results">
          <SearchBar />

          <div className="universities-grid">
            {universities.map((university, index) => (
              <UniversityCard key={index} {...university} />
            ))}
          </div>

          <Pagination />
        </div>
      </div>

      <JoinSociety />

      <Footer />
    </div>
  );
}

