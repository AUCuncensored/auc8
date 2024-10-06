// src/confirmation.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate back to the main page if the page is reloaded
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      return (event.returnValue = "Are you sure you want to leave?");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="confirmation">
      <h1>Your confession has been submitted!</h1>
      <p>Thank you for sharing with us.</p>
      <button onClick={handleRedirect}>Go Back to Submission Form</button>
    </div>
  );
};

export default Confirmation;