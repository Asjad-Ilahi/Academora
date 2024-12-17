import React from 'react';
import './universityCard.css';

export function UniversityCard({ name, description, image }) {
  return (
    <div className="university-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

