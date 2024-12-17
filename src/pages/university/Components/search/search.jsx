import React from 'react';
import './search.css';

export function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Find university" />
      <button className="search-button">Search</button>
    </div>
  );
}

