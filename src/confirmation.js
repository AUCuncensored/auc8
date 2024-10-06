// src/Confirmation.js
import React, { useEffect } from 'react';
import './confirmation.css';

const Confirmation = () => {
  useEffect(() => {
    // Create a meta refresh tag
    const meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = '0; URL=/'; // Redirect to the home page immediately
    document.head.appendChild(meta);

    // Clean up on unmount
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="confirmation-container">
      <h1>Thank You!</h1>
      <p>Your message has been successfully uploaded.</p>
    </div>
  );
};

export default Confirmation;