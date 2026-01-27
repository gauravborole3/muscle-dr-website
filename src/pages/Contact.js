import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Clear any previous message
  setStatus({ type: '', message: '' });

  emailjs
    .send(
      'service_uydp3xx',
      'template_ac0kga9',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'MhW359GuqmDQ4m7sc'
    )
    .then(() => {
      // ✅ Success message
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Auto-hide message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);

      // ❌ Error message
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });

      // Auto-hide error after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    });
};
  const [status, setStatus] = useState({ type: '', message: '' });


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="contact"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container">
          <motion.h1 variants={itemVariants}>Contact Us</motion.h1>
          <motion.p 
            variants={itemVariants}
            style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto 3rem' }}
          >
            Get in touch with us today. We're here to help you on your journey to better health.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 style={{ color: '#1967d2', marginBottom: '2rem' }}>Get In Touch</h2>
              <motion.div 
                className="contact-info"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(25, 103, 210, 0.15)' }}
                >
                  <h3>📍 Location</h3>
                  <p>A-33, E-Type<br />Near Gayatri Mandir<br />Nepanagar(M.P.)-450221</p>
                </motion.div>
                <motion.div 
                  className="contact-item" 
                  style={{ marginTop: '1.5rem' }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(25, 103, 210, 0.15)' }}
                >
                  <h3>📞 Phone</h3>
                  <p><a href="tel:+91-6266228811" style={{ color: '#1967d2', textDecoration: 'none' }}>+91-6266228811</a></p>
                </motion.div>
                <motion.div 
                  className="contact-item" 
                  style={{ marginTop: '1.5rem' }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(25, 103, 210, 0.15)' }}
                >
                  <h3>✉️ Email</h3>
                  <p><a href="mailto:themuscledr@gmail.com" style={{ color: '#1967d2', textDecoration: 'none' }}>themuscledr@gmail.com</a></p>
                </motion.div>
                <motion.div 
                  className="contact-item" 
                  style={{ marginTop: '1.5rem' }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(25, 103, 210, 0.15)' }}
                >
                  <h3>🕒 Clinic Visiting Hours </h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed </p> 
                  <h3>Online/Virtual Consultation </h3>
                  <p>24x7</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 style={{ color: '#1967d2', marginBottom: '2rem' }}>Send us a Message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                    placeholder="9876543210"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                    {status.message && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: '12px',
        borderRadius: '6px',
        marginBottom: '1rem',
        fontSize: '0.95rem',
        color: status.type === 'success' ? '#155724' : '#721c24',
        backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
        border:
          status.type === 'success'
            ? '1px solid #c3e6cb'
            : '1px solid #f5c6cb',
      }}
    >
      {status.message}
    </motion.div>
  )}
                <motion.button
                  type="submit"
                  style={{
                    backgroundColor: '#1967d2',
                    color: 'white',
                    padding: '12px 30px',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: '#1450b8' }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1450b8'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1967d2'}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default ContactPage;
