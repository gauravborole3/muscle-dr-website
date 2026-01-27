import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const servicesList = [
    {
      id: 1,
      icon: '🏥',
      title: 'Sports Injury Rehabilitation',
      description: 'Specialized treatment for sports-related injuries with personalized recovery plans to get you back in the game faster. We work with athletes of all levels to ensure optimal recovery.'
    },
    {
      id: 2,
      icon: '💪',
      title: 'Muscle & Joint Therapy',
      description: 'Comprehensive therapy for muscle tension, joint pain, and mobility issues using evidence-based techniques. Our therapists use manual therapy and modern equipment for effective treatment.'
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Rehabilitation & Wellness',
      description: 'Post-surgery rehabilitation and preventive wellness programs to maintain optimal physical health and performance. We help you recover safely and build strength for long-term wellness.'
    },
    {
      id: 4,
      icon: '🧘',
      title: 'Chronic Pain Management',
      description: 'Specialized programs for managing chronic pain conditions with holistic approaches combining therapy, exercise, and lifestyle modifications.'
    },
    {
      id: 5,
      icon: '👴',
      title: 'Senior Mobility & Balance',
      description: 'Safe and effective programs designed to improve mobility, balance, and independence for seniors, reducing fall risk and enhancing quality of life.'
    },
    {
      id: 6,
      icon: '🤰',
      title: 'Pre & Post-Natal Physiotherapy',
      description: 'Specialized care for expectant mothers and postpartum recovery, addressing pregnancy-related pain and helping regain strength after delivery.'
    }
  ];

  // Subtle and professional animation variants
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

  // Service card hover animation - subtle and professional
  const cardHoverVariants = {
    rest: {
      y: 0,
      boxShadow: '0 2px 12px rgba(25, 103, 210, 0.08)',
    },
    hover: {
      y: -8,
      boxShadow: '0 12px 25px rgba(25, 103, 210, 0.15)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Icon animation - subtle bounce and subtle rotation
  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Title animation - subtle color shift
  const titleVariants = {
    rest: { color: '#2c3e50' },
    hover: {
      color: '#1967d2',
      transition: { duration: 0.2 },
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
        className="services"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container">
          <motion.h1 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Our Services
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto 3rem' }}
          >
            We offer comprehensive physiotherapy services tailored to meet your specific needs and health goals.
          </motion.p>

          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {servicesList.map((service, index) => (
              <motion.div 
                key={service.id} 
                className="service-card"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                animate="rest"
              >
                <motion.div
                  className="service-card-inner"
                  initial="rest"
                  whileHover="hover"
                  variants={cardHoverVariants}
                  style={{ borderTopColor: ['#1967d2', '#5e92f3', '#0d47a1', '#1e88e5', '#1565c0', '#0d3aa3'][index] }}
                >
                  <motion.div 
                    className="service-icon"
                    initial="rest"
                    whileHover="hover"
                    variants={iconVariants}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <motion.h3
                    initial="rest"
                    whileHover="hover"
                    variants={titleVariants}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Services;
