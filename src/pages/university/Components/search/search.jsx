import React, { useState } from 'react';
import './search.css';

export function SearchBar({ universities, onFilteredUniversities }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredUniversities = universities.filter(university => 
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    onFilteredUniversities(filteredUniversities);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Find university" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
        className="search-button" 
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}