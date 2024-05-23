import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const AlertComponent = (props) => {
  const [showAlert, setShowAlert] = useState(props.state);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false); // Hide the alert after 3 seconds
    }, 3000);

    return () => {
      clearTimeout(timer); // Clear the timer when component unmounts or changes
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <CSSTransition
      in={showAlert}
      timeout={500} // Set the transition duration in milliseconds
      classNames={{
        enter: 'fade-enter',
        enterActive: 'fade-enter-active',
        exit: 'fade-exit',
        exitActive: 'fade-exit-active',
      }}
      unmountOnExit
    >
      <div
        role="alert"
        className="alert alert-success"
        style={{
          opacity: showAlert ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          position: 'fixed',
          bottom: '20px',
          right: '10%',
          minWidth: '200px',
          maxWidth: '350px',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{props.text}</span>
      </div>
    </CSSTransition>
  );
};

export default AlertComponent;
