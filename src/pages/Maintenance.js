import React from 'react';
import maintenanceImage from '../assets/Maintenance.png';
import logo from '../assets/logo.png';

function Maintenance() {
  return (
    <div
      className="maintenance-page"
      style={{
        minHeight: '100vh',
        background: '#f6f7fb',
        position: 'relative',
        padding: '20px'
      }}
    >
      {/* Logo (Top Left) */}
      <img
        src={logo}
        alt="The Muscle Dr Logo"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '120px',
          height: 'auto'
        }}
        className="maintenance-logo"
      />

      {/* Center Content */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}
      >
        <img
          src={maintenanceImage}
          alt="Site Under Maintenance"
          className="maintenance-image"
          style={{
            width: '100%',
            maxWidth: '900px',
            borderRadius: '20px',
            boxShadow: '0 28px 90px rgba(0,0,0,0.12)'
          }}
        />
      </div>

      {/* Responsive Styling */}
<style>
  {`
    @media (max-width: 768px) {
      .maintenance-logo {
        width: 80px !important;
        top: 15px !important;
        left: 15px !important;
      }

      .maintenance-image {
        width: 100vw !important;         /* full screen width */
        max-width: 100vw !important;
        margin-left: calc(-50vw + 50%);  /* remove side padding effect */
        border-radius: 0 !important;     /* optional: edge-to-edge look */
      }
    }

    @media (max-width: 480px) {
      .maintenance-logo {
        width: 65px !important;
      }

      .maintenance-image {
        width: 110vw !important;         /* slightly zoomed for impact */
      }
    }
  `}
</style>
    </div>
  );
}

export default Maintenance;