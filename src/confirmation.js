// src/Confirmation.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user navigated from the form submission
    const hasNavigatedFromForm = sessionStorage.getItem('navigatedFromForm');

    if (!hasNavigatedFromForm) {
      navigate('/'); // Redirect to the main page if not navigated from the form
    }

    // Cleanup: Remove the session item on unmount
    return () => {
      sessionStorage.removeItem('navigatedFromForm');
    };
  }, [navigate]);

  return (
    <div className="confirmation-container">
      <h1>Thank You!</h1>
      <p>Your message has been successfully uploaded.</p>
    </div>
  );
};

export default Confirmation;