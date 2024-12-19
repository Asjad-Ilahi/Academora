import React, { useState, useEffect } from 'react';
import './filter.css';

export function FilterSection({ filters, setFilters }) {
  const [fields, setFields] = useState({
    rank: [],
    number_students: [],
    intl_students: [],
    subjects: [],
  });

  // Fetch unique filter values from JSON
  useEffect(() => {
    const uniqueValues = {
      rank: new Set(),
      number_students: new Set(),
      intl_students: new Set(),
      subjects: new Set(),
    };

    filters.data.forEach((uni) => {
      uniqueValues.rank.add(uni.rank);
      uniqueValues.number_students.add(uni.number_students);
      uniqueValues.intl_students.add(uni.intl_students);
      uni.subjects.forEach((subject) => uniqueValues.subjects.add(subject));
    });

    setFields({
      rank: [...uniqueValues.rank],
      number_students: [...uniqueValues.number_students],
      intl_students: [...uniqueValues.intl_students],
      subjects: [...uniqueValues.subjects],
    });
  }, [filters.data]);

  // Update filter state
  const handleFilterChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Filter</h3>
      </div>

      {Object.keys(fields).map((field) => (
        <div className="filter-group" key={field}>
          <label>{field.replace('_', ' ').toUpperCase()}</label>
          <select name={field} onChange={handleFilterChange} defaultValue="">
            <option value="">All {field}</option>
            {fields[field].map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
