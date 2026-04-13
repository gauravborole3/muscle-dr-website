import React from 'react';
import logo from '../assets/logo.png';

function Maintenance() {
  return (
    <div className="maintenance-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', background: '#f6f7fb' }}>
      <div className="maintenance-card" style={{ width: '100%', maxWidth: '720px', textAlign: 'center', padding: '48px 32px', borderRadius: '24px', background: '#ffffff', boxShadow: '0 24px 80px rgba(0,0,0,0.08)' }}>
        <img src={logo} alt="The Muscle Dr Logo" style={{ width: '125px', height: 'auto', marginBottom: '24px' }} />
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#888', margin: '0 0 12px' }}>The Muscle Dr</h2>
          <h1 style={{ fontSize: '2.75rem', margin: '0 0 18px' }}>Site Under Maintenance</h1>
        </div>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#4a4a4a', margin: 0 }}>
          We&rsquo;re currently updating the site for a better experience. Please check back soon.
        </p>
      </div>
    </div>
  );
}

export default Maintenance;
