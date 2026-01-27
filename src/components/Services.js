import React from 'react';

function Services() {
  const servicesList = [
    {
      id: 1,
      icon: '🏥',
      title: 'Sports Injury Rehabilitation',
      description: 'Specialized treatment for sports-related injuries with personalized recovery plans to get you back in the game faster.'
    },
    {
      id: 2,
      icon: '💪',
      title: 'Muscle & Joint Therapy',
      description: 'Comprehensive therapy for muscle tension, joint pain, and mobility issues using evidence-based techniques.'
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Rehabilitation & Wellness',
      description: 'Post-surgery rehabilitation and preventive wellness programs to maintain optimal physical health and performance.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
