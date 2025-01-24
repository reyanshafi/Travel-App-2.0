'use client'; // Mark as a Client Component
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling and pointer events on the body
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    // Simulate loading delay (optional)
    const timer = setTimeout(() => {
      setLoading(false);
      // Re-enable scrolling and pointer events after loader finishes
      document.body.style.overflow = 'auto';
      document.body.style.pointerEvents = 'auto';
    }, 1500); // Adjust the delay as needed

    // Cleanup timer and re-enable scrolling/pointer events
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
      document.body.style.pointerEvents = 'auto';
    };
  }, []);

  if (!loading) return null;

  return (
    <StyledWrapper>
      <div className="preloader-content">
        {/* Add your logo/image here */}
        <img
          src="/images/logo.svg" // Replace with your logo path
          alt="Logo"
          className="logo"
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 9999; /* Ensure it's above everything else */

  .preloader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: 300px; /* Adjust logo size as needed */
    height: auto;
  }
`;

export default PreLoader;