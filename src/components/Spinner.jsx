import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p className="spinner-text">Fetching repositories from GitHub...</p>
    </div>
  );
};

export default Spinner;
