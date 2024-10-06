// src/Confirmation.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is coming from the form submission
    const hasNavigatedFromForm = sessionStorage.getItem('navigatedFromForm');

    if (!hasNavigatedFromForm) {
      // If the user didn't navigate from the form, redirect to the main page
      navigate('/');
    } else {
      // If the user did navigate from the form, set the sessionStorage item
      sessionStorage.setItem('navigatedFromForm', 'true');
    }

    // Cleanup function to remove the sessionStorage item when leaving the confirmation page
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