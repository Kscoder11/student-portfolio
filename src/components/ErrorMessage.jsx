import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">!</div>
      <h3 className="error-title">Something went wrong</h3>
      <p className="error-text">{message}</p>
    </div>
  );
};

export default ErrorMessage;
