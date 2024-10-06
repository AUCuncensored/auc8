// src/Confirmation.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasNavigatedFromForm = sessionStorage.getItem('navigatedFromForm');

    if (!hasNavigatedFromForm) {
      navigate('/'); // Redirect to home if not navigated from form
    } else {
      sessionStorage.setItem('navigatedFromForm', 'true'); // Set flag
    }

    return () => {
      sessionStorage.removeItem('navigatedFromForm'); // Cleanup on unmount
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