// src/Confirmation.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the page was loaded from the browser cache (refresh)
    const isReload = sessionStorage.getItem('navigatedFromForm');

    if (!isReload) {
      // If the user came directly to this page (not refreshing), set the sessionStorage item
      sessionStorage.setItem('navigatedFromForm', 'true');
    } else {
      // If the user refreshed the page, navigate back to the main page
      navigate('/');
    }

    // Cleanup function to remove the sessionStorage item after leaving the confirmation page
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