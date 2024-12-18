import React, { useState } from 'react';
import { Navbar } from '../../components/navbar/navBar';
import { Footer } from '../../components/footer/footer';
import { HeroSection } from './Components/heroSection/heroSection';
import { FilterSection } from './Components/filter/filter';
import { SearchBar } from './Components/search/search';
import { UniversityCard } from './Components/universityCard/universityCard';
import { Pagination } from './Components/pagination/pagination';
import { JoinSociety } from './Components/joinSociety/joinSociety';
import './university.css';
import universityData from '../../assets/updated_universities.json';
import Placeholder from '../../assets/university_placeholder.png';

export default function Universities() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCard, setExpandedCard] = useState(null); // State for expanded card
  const universitiesPerPage = 6;

  // Calculate indices for the current page
  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = universityData.slice(indexOfFirstUniversity, indexOfLastUniversity);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="universities-page">
      <Navbar />
      <HeroSection />
      <div className="search-container">
        <FilterSection />
        <div className="search-results">
          <SearchBar />
          <div className="universities-grid">
            {currentUniversities.map((university, index) => (
              <UniversityCard
                key={index}
                name={university.name}
                description={university.description}
                image={university.image_url  ? university.image_url  : Placeholder } // Use default image if null
                isExpanded={expandedCard === university.name}
                onExpand={() => setExpandedCard(university.name)}
                onCollapse={() => setExpandedCard(null)}
              />
            ))}
          </div>
          <Pagination
            itemsPerPage={universitiesPerPage}
            totalItems={universityData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <JoinSociety />
      <Footer />
    </div>
  );
}
