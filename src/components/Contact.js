import React from 'react';

function Contact() {
  const contactDetails = [
    {
      id: 1,
      icon: '📍',
      title: 'Location',
      info: '123 Health Street, Medical Center, City 12345'
    },
    {
      id: 2,
      icon: '📞',
      title: 'Phone',
      info: '(555) 123-4567'
    },
    {
      id: 3,
      icon: '✉️',
      title: 'Email',
      info: 'info@themuscledr.com'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          {contactDetails.map((contact) => (
            <div key={contact.id} className="contact-item">
              <h3>{contact.icon} {contact.title}</h3>
              <p>{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
