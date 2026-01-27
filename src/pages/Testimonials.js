import React from 'react';
import { motion } from 'framer-motion';
import testimonialData from '../data/testimonials.json';

function Testimonials() {
  // const [filter, setFilter] = useState('all');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const testimonials = [...testimonialData
  ];

  // const conditions = ['all', ...new Set(testimonials.map(t => t.condition))];

  // const filteredTestimonials = filter === 'all' 
  //   ? testimonials 
  //   : testimonials.filter(t => t.condition === filter);

  const renderStars = (rating) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
    );
  };

  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <motion.section 
        className="page-header testimonials-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1>What Our Patients Say</h1>
          <p>Real stories from real patients who've experienced transformation through our physiotherapy care</p>
        </motion.div>
      </motion.section>

      {/* Filter Section */}
      {/* <motion.section 
        className="filter-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Filter by Condition</h2>
          <div className="filter-buttons">
            {conditions.map((condition) => (
              <motion.button
                key={condition}
                className={`filter-btn ${filter === condition ? 'active' : ''}`}
                onClick={() => setFilter(condition)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {condition.charAt(0).toUpperCase() + condition.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Testimonials Grid */}
      <motion.section 
        className="testimonials-grid-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <motion.div 
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 15px 40px rgba(25, 103, 210, 0.2)' 
                }}
              >
                <div className="testimonial-header">
                  <div className="patient-avatar">{testimonial.image}</div>
                  <div className="patient-info">
                    <h3>{testimonial.name}</h3>
                    <p className="condition-label">{testimonial.condition}</p>
                  </div>
                </div>

                {renderStars(testimonial.rating)}

                <p className="testimonial-text">"{testimonial.text}"</p>

                <div className="testimonial-footer">
                  <span className="verified-badge">✓ Verified Patient</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* {filteredTestimonials.length === 0 && (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No testimonials found for this condition.</p>
            </motion.div>
          )} */}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="testimonials-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Recovery Journey?</h2>
            <p>Join over 1000+ patients who have transformed their lives through our evidence-based physiotherapy</p>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                Schedule Your Consultation Today
              </a>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Testimonials;
