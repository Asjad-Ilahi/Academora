import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './filter.css';
import FilterImage from '../../../../assets/adjust.svg';

export const FilterSection = ({ filters, setFilters }) => {
  const [fields, setFields] = useState({
    rank: { min: 1, max: 1001 },
    countries: [],
    subjects: [],
    number_students: { min: 0, max: 50000 },
    intl_students: { min: 0, max: 100 },
    research_score: { min: 0, max: 100 },
    teaching_score: { min: 0, max: 100 }
  });

  const [rangeValues, setRangeValues] = useState({
    rank: { min: 1, max: 1001 },
    number_students: { min: 0, max: 50000 },
    intl_students: { min: 0, max: 100 },
    research_score: { min: 0, max: 100 },
    teaching_score: { min: 0, max: 100 }
  });

  const subjectsList = [
    'Arts and Humanities',
    'Business and Economics',
    'Clinical and Health',
    'Computer science',
    'Education',
    'Engineering',
    'Law',
    'Life sciences',
    'Physical sciences',
    'Psychology',
    'Social sciences',
  ];

  const cleanSubjectName = (subject) => {
    return subject.replace(/\d+.*$/, '').trim();
  };

  useEffect(() => {
    const uniqueValues = {
      countries: new Set(),
    };

    filters.data.forEach((uni) => {
      if (uni.country) uniqueValues.countries.add(uni.country);
    });

    setFields(prev => ({
      ...prev,
      countries: [...uniqueValues.countries].sort(),
      subjects: subjectsList.map(subject => cleanSubjectName(subject)),
    }));
  }, [filters.data]);

  const handleRangeChange = (name, value, type) => {
    const newMin = type === 'min' ? Math.min(parseInt(value), rangeValues[name].max) : rangeValues[name].min;
    const newMax = type === 'max' ? Math.max(parseInt(value), rangeValues[name].min) : rangeValues[name].max;

    setRangeValues(prev => ({
      ...prev,
      [name]: {
        min: newMin,
        max: newMax
      }
    }));

    setFilters(prev => ({
      ...prev,
      [name]: { min: newMin, max: newMax }
    }));
  };

  const handleInputChange = (name, value) => {
    if (name === 'subjects') {
      value = value.map(subject => cleanSubjectName(subject));
    }
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setRangeValues({
      rank: { min: 1, max: 1001 },
      number_students: { min: 0, max: 50000 },
      intl_students: { min: 0, max: 100 },
      research_score: { min: 0, max: 100 },
      teaching_score: { min: 0, max: 100 }
    });

    setFilters({
      data: filters.data,
      rank: "",
      number_students: "",
      intl_students: "",
      subjects: [],
      countries: [],
      research_score: "",
      teaching_score: ""
    });
  };

  const formatValue = (value, includePercent = false) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k${includePercent ? '%' : ''}`;
    }
    return `${value}${includePercent ? '%' : ''}`;
  };

  const renderRangeInputs = (key, value, showPercent = false) => (
    <div className="range-inputs">
      <input
        type="number"
        min={value.min}
        max={value.max}
        value={rangeValues[key].min}
        onChange={(e) => handleRangeChange(key, e.target.value, 'min')}
        className="range-input"
      />
      <span className="range-separator">to</span>
      <input
        type="number"
        min={value.min}
        max={value.max}
        value={rangeValues[key].max}
        onChange={(e) => handleRangeChange(key, e.target.value, 'max')}
        className="range-input"
      />
      {showPercent && <span className="percent-sign">%</span>}
    </div>
  );

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Filters</h3>
        <img src={FilterImage} alt="filter icon" className='filterImage'/>
      </div>

      <div className="filter-content">
        <div className="filter-group">
          <label>COUNTRY</label>
          <Select
            isMulti
            options={fields.countries.map((country) => ({
              label: country,
              value: country,
            }))}
            onChange={(selected) => handleInputChange('countries', selected?.map((opt) => opt.value) || [])}
            className="select-input"
            classNamePrefix="select"
          />
        </div>

        <div className="filter-group">
          <label>SUBJECTS</label>
          <Select
            isMulti
            options={fields.subjects.map((subject) => ({
              label: subject,
              value: subject,
            }))}
            onChange={(selected) => handleInputChange('subjects', selected?.map((opt) => opt.value) || [])}
            className="select-input"
            classNamePrefix="select"
          />
        </div>

        <div className="filter-group">
          <label>RANK</label>
          {renderRangeInputs('rank', fields.rank)}
        </div>

        <div className="filter-group">
          <label>NUMBER STUDENTS</label>
          {renderRangeInputs('number_students', fields.number_students)}
        </div>

        <div className="filter-group">
          <label>INTL STUDENTS</label>
          {renderRangeInputs('intl_students', fields.intl_students, true)}
        </div>

        <div className="filter-group">
          <label>RESEARCH SCORE</label>
          {renderRangeInputs('research_score', fields.research_score, true)}
        </div>

        <div className="filter-group">
          <label>TEACHING SCORE</label>
          {renderRangeInputs('teaching_score', fields.teaching_score, true)}
        </div>

        <button onClick={resetFilters} className="reset-button">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
