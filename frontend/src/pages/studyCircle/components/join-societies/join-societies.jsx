import React from 'react';
import './join-societies.css';
import IEEE from '../../../../assets/IEEE.svg';
import C3 from '../../../../assets/C3.svg';

export default function JoinedSocieties() {
  const societies = Array(6).fill('IEEE'); // Example with 6 IEEE logos

  return (
    <section className="joined-societies">
      <div className="section-header">
        <h2>Joined <span className="highlight">Study Circles</span></h2>
        <a href="#" className="see-all">See All</a>
      </div>
      <div className="societies-grid">
        {societies.map((society, index) => (
          <div key={index} className="society-logo">
            <img src={IEEE} alt={society} />
          </div>
        ))}
      </div>
    </section>
  );
}

