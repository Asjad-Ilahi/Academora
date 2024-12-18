import React from 'react';
import './filter.css';

export function FilterSection() {
  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Filter</h3>
      </div>
      
      <div className="filter-group">
        <label>City</label>
        <select defaultValue="">
          <option value="">All cities</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Study level</label>
        <select defaultValue="">
          <option value="">All study levels</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Study field</label>
        <select defaultValue="">
          <option value="">All study fields</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Type</label>
        <select defaultValue="">
          <option value="">Any</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Employees</label>
        <select defaultValue="">
          <option value="">Any</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Teachers</label>
        <select defaultValue="">
          <option value="">Any</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Students</label>
        <select defaultValue="">
          <option value="">Any</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Foreigners percentage</label>
        <select defaultValue="">
          <option value="">Any</option>
        </select>
      </div>
    </div>
  );
}

