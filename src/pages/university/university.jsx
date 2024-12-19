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
  const [filters, setFilters] = useState({
    data: universityData,
    rank: "",
    number_students: "",
    intl_students: "",
    subjects: "",
  });

  const universitiesPerPage = 6;

  // Filter universities based on selected filters
  const filteredUniversities = universityData.filter((uni) => {
    return (
      (!filters.rank || uni.rank === filters.rank) &&
      (!filters.number_students || uni.number_students === filters.number_students) &&
      (!filters.intl_students || uni.intl_students === filters.intl_students) &&
      (!filters.subjects || uni.subjects.includes(filters.subjects))
    );
  });

  // Pagination indices
  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="universities-page">
      <Navbar />
      <HeroSection />
      <div className="search-container">
        <FilterSection filters={filters} setFilters={setFilters} />
        <div className="search-results">
          <SearchBar />
          <div className="universities-grid">
            {currentUniversities.map((university, index) => (
              <UniversityCard
                key={index}
                name={university.name}
                description={university.description}
                image={university.image_url ? university.image_url : Placeholder} // Use default image if null
                isExpanded={expandedCard === university.name}
                onExpand={() => setExpandedCard(university.name)}
                onCollapse={() => setExpandedCard(null)}
              />
            ))}
          </div>
          <Pagination
            itemsPerPage={universitiesPerPage}
            totalItems={filteredUniversities.length}
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
