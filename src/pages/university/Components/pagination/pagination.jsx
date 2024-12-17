import React from 'react';
import './pagination.css';

export function Pagination() {
  return (
    <div className="pagination">
      <button className="pagination-button">Back</button>
      <div className="page-numbers">
        <span className="active">1</span>
        <span>2</span>
        <span>...</span>
        <span>5</span>
      </div>
      <button className="pagination-button">Forward</button>
    </div>
  );
}

