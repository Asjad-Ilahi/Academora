import React from 'react';
import './recommended.css';
import IEEE from '../../../../assets/IEEE.svg'
import C3 from '../../../../assets/C3.svg'


export default function RecommendedSocieties() {
  const societies = [
    {
      name: 'IEEE',
      logo: IEEE,
      description: 'Where ideas meet and solutions thrive.',
    },
    {
      name: 'C3',
      logo: C3,
      description: 'A community for ambitious learners to excel together.',
    }
  ];

  return (
    <section className="recommended-societies">
      <h2>Recommended <span className="highlight">Societies</span></h2>
      <div className="society-cards">
        {societies.map((society, index) => (
          <div key={index} className="society-card">
            <img src={society.logo} alt={society.name} className="society-logo" />
            <p>{society.description}</p>
            <button className="join-button">Join</button>
          </div>
        ))}
      </div>
    </section>
  );
}

