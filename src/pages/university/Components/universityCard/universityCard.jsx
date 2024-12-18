import React from 'react';
import './universityCard.css';
import UniPlaceholder from '../../../../assets/university_placeholder.png';

export function UniversityCard({
  name,
  description,
  image,
  isExpanded,
  onExpand,
  onCollapse,
}) {
  return (
    <div className={`university-card-wrapper ${isExpanded ? 'expanded' : ''}`}>
      <div className="university-card">
        <div className="card-image">
          <img src={image} alt={name} onError={(e) => (e.target.src = {UniPlaceholder})}/>
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <p className="description-truncated">{description}</p>
          <button className={`toggle-description ${isExpanded ? 'expanded' : ''}`} onClick={onExpand}> {isExpanded ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="expanded-card-overlay">
          <div className="expanded-card">
            <button className="close-button" onClick={onCollapse}>
              ✖
            </button>
            <div className="expanded-content">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
