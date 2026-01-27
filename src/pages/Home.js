import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import testimonialData from '../data/testimonials.json';


function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  };

  const topTestimonials = [...testimonialData]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO SECTION - Fitness + Medical Fusion */}
      <motion.section 
        className="hero-fusion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-fusion-content">
          <motion.div 
            className="hero-text-wrapper"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="hero-title-fusion"
              variants={fadeInUp}
            >
              <span className="text-bold">Peak Performance</span>
              <span className="text-accent"> + Medical Excellence</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle-fusion"
              variants={fadeInUp}
            >
              Where cutting-edge physiotherapy meets athletic optimization. Transform pain into power with evidence-based treatment.
            </motion.p>

            <motion.div 
              className="hero-cta-group-fusion"
              variants={fadeInUp}
            >
              <Link to="/contact" className="btn-fusion btn-primary-fusion btn-large-fusion">
                Start Your Transformation
              </Link>
              <Link to="/services" className="btn-fusion btn-secondary-fusion btn-large-fusion">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-stats-fusion"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="stat-card-fusion glass-card-frosted"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">⚡</div>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Patients Transformed</div>
            </motion.div>
            <motion.div 
              className="stat-card-fusion glass-card-frosted"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">🏆</div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </motion.div>
            <motion.div 
              className="stat-card-fusion glass-card-frosted"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">🎯</div>
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CORE SERVICES - Frosted Cards */}
      <motion.section 
        className="services-fusion"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="section-header-fusion"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUp} className="section-title-fusion">
            Elite Treatment<span className="accent-dot"> .</span>
          </motion.h2>
          <motion.p variants={fadeInUp}>
            Fusion of athletic performance science and clinical excellence
          </motion.p>
        </motion.div>

        <motion.div 
          className="services-grid-fusion"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { 
              icon: '⚡', 
              title: 'Performance Optimization', 
              desc: 'Maximize athletic potential through advanced biomechanical analysis',
              color: 'blue'
            },
            { 
              icon: '🔧', 
              title: 'Injury Rehabilitation', 
              desc: 'Scientific recovery protocols for sports and post-surgical injuries',
              color: 'green'
            },
            { 
              icon: '💪', 
              title: 'Strength & Conditioning', 
              desc: 'Personalized programs to build resilience and power',
              color: 'purple'
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              className={`service-card-fusion glass-card-frosted glass-card-${service.color}`}
              variants={fadeInUp}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon-fusion">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              {/* <div className="service-arrow">→</div> */}
            </motion.div>
          ))}
        </motion.div>
        
      </motion.section>
      

      {/* WHY CHOOSE US - Energetic Section */}
      <motion.section 
        className="why-us-fusion"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="why-us-container-fusion">
          <motion.div 
            className="why-us-text"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="why-title-fusion">
              Why <span className="fusion-accent">The Muscle Dr</span> Wins
            </motion.h2>
            <motion.p variants={fadeInUp} className="why-intro-fusion">
              We don't just treat pain. We unlock potential. Our hybrid approach combines cutting-edge physiotherapy with athletic science.
            </motion.p>
            
            <motion.div className="benefits-grid-fusion" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {[
                { icon: '🎓', text: 'Certified Specialists' },
                { icon: '🔬', text: 'Evidence-Based Methods' },
                { icon: '🏥', text: 'State-of-the-Art Facility' },
                { icon: '⏰', text: 'Flexible Scheduling' },
                { icon: '📊', text: 'Data-Driven Results' },
                { icon: '🤝', text: 'Personalized Care' },

              ].map((benefit, i) => (
                <motion.div key={i} className="benefit-item-fusion glass-card-frosted" variants={fadeInUp}>
                  <span className="benefit-icon">{benefit.icon}</span>
                  <span className="benefit-text">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="why-us-visual-fusion"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="visual-circle"
              animate={pulseAnimation}
            >
              💪
            </motion.div>
          </motion.div>
        </div>
        
      </motion.section>
                
      {/* TESTIMONIALS - Success Stories */}  
      <motion.section 
        className="testimonials-fusion"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="section-header-fusion"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUp} className="section-title-fusion">
            What Patients Say<span className="accent-dot"> .</span>
          </motion.h2>
          <motion.p variants={fadeInUp}>
            Real transformations from our patients
          </motion.p>
        </motion.div>

        <motion.div 
          className="testimonials-grid-fusion"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {topTestimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              className="testimonial-card-fusion glass-card-frosted"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="testimonial-header-fusion">
                <span className="testimonial-emoji">{testimonial.image}</span>
                <div className="rating-fusion">{'⭐'.repeat(testimonial.rating)}</div>
              </div>
              <p className="quote-fusion">"{testimonial.text}"</p>
              <p className="author-fusion">{testimonial.name}</p>
              <p className="achievement-fusion">{testimonial.condition}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="testimonials-cta-fusion"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link to="/testimonials" className="btn-fusion btn-primary-fusion btn-large-fusion">
            Read More Success Stories
          </Link>
        </motion.div>
      </motion.section>

      {/* FINAL CTA - Bold Call to Action */}
      <motion.section 
        className="cta-fusion"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="cta-content-fusion"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUp} className="cta-title-fusion">
            Ready to Elevate Your Performance?
          </motion.h2>
          <motion.p variants={fadeInUp} className="cta-subtitle-fusion">
            Join 1000+ athletes and patients who've transformed their lives.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/contact" className="btn-fusion btn-cta-fusion">
              Schedule Your Assessment Today
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Home;
