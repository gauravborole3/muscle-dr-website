import React from 'react';
import { motion } from 'framer-motion';

function About() {
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
        staggerChildren: 0.15,
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
        className="about"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container">
          <motion.div 
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants}>Our Mission</motion.h2>
            <motion.p variants={itemVariants}>
              At The Muscle Dr, we believe that pain-free movement is the foundation of a healthy, active life. 
              With over a decade of expertise in physiotherapy and rehabilitation, our dedicated team of licensed professionals 
              is committed to helping you recover from injuries, manage chronic pain, and regain the mobility you need to thrive.
            </motion.p>

            <motion.h2 variants={itemVariants} style={{ marginTop: '2rem' }}>Our Approach</motion.h2>
            <motion.p variants={itemVariants}>
              We take a personalized, evidence-based approach to every patient. Whether you're recovering from surgery, 
              dealing with sports injuries, or managing long-term pain conditions, we work closely with you to create a customized 
              treatment plan that accelerates healing and prevents future complications.
            </motion.p>

            <motion.h2 variants={itemVariants} style={{ marginTop: '2rem' }}>Why Choose Us?</motion.h2>
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ lineHeight: '2', fontSize: '1.05rem', color: '#555' }}
            >
              <motion.li variants={itemVariants}>✓ Certified and experienced physiotherapists</motion.li>
              <motion.li variants={itemVariants}>✓ State-of-the-art treatment facilities</motion.li>
              <motion.li variants={itemVariants}>✓ Personalized treatment plans for every patient</motion.li>
              <motion.li variants={itemVariants}>✓ Evidence-based techniques and latest technology</motion.li>
              <motion.li variants={itemVariants}>✓ Compassionate and patient-centered care</motion.li>
              <motion.li variants={itemVariants}>✓ Flexible scheduling and convenient location</motion.li>
            </motion.ul>

            <motion.h2 variants={itemVariants} style={{ marginTop: '2rem' }}>Our Team</motion.h2>
            <motion.p variants={itemVariants}>
              Dr. Nidhish Ingle (PT) <br />
               BPTH (MPMSU, Jabalpur) <br/> Experienced Physiotherapist with clinical exposure at Saifee Hospital & Synergy Childcare, Mumbai. Specialized in Lymphoedema Management.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default About;
