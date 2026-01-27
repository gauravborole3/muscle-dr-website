import React from 'react';
import { motion } from 'framer-motion';

function GlassmorphismDemo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #1967d2 0%, #0d47a1 100%)',
      padding: '80px 40px',
      minHeight: '100vh'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', fontWeight: '900' }}>
            Glassmorphism Card Styles
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Beautiful frosted glass effect cards perfect for modern UI design
          </p>
        </motion.div>

        {/* Basic Glass Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}
        >
          <motion.div variants={itemVariants} className="glass-card">
            <div className="glass-card-icon">🎨</div>
            <h3 className="glass-card-title">Basic Glass Card</h3>
            <p className="glass-card-description">
              The standard glassmorphism card with 10px blur effect and smooth transitions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-light">
            <div className="glass-card-icon">✨</div>
            <h3 className="glass-card-title">Light Variant</h3>
            <p className="glass-card-description">
              Enhanced blur (12px) with higher opacity for maximum frosted glass effect.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-dark">
            <div className="glass-card-icon">🌙</div>
            <h3 className="glass-card-title">Dark Variant</h3>
            <p className="glass-card-description">
              Perfect for light backgrounds with blue-tinted frosted glass effect.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-frosted">
            <div className="glass-card-icon">❄️</div>
            <h3 className="glass-card-title">Frosted Variant</h3>
            <p className="glass-card-description">
              More opaque for a deeper frosted appearance with 15px blur intensity.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-minimal">
            <div className="glass-card-icon">🌟</div>
            <h3 className="glass-card-title">Minimal Variant</h3>
            <p className="glass-card-description">
              Subtle frosted effect with minimal blur (6px) for subtle styling.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-accent">
            <div className="glass-card-icon">💎</div>
            <h3 className="glass-card-title">Accent Variant</h3>
            <p className="glass-card-description">
              Colored border accent with blue tint for emphasis and visual hierarchy.
            </p>
          </motion.div>
        </motion.div>

        {/* Colored Variants */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
        >
          <motion.div variants={itemVariants} className="glass-card-blue">
            <div className="glass-card-header">
              <h3>Blue Tint</h3>
              <p>Medical / Professional</p>
            </div>
            <div className="glass-card-body">
              <p>Great for healthcare and professional services with blue color tint.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-green">
            <div className="glass-card-header">
              <h3>Green Tint</h3>
              <p>Health / Wellness</p>
            </div>
            <div className="glass-card-body">
              <p>Ideal for health and wellness services with calming green tint.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-purple">
            <div className="glass-card-header">
              <h3>Purple Tint</h3>
              <p>Creative / Premium</p>
            </div>
            <div className="glass-card-body">
              <p>Perfect for creative and premium services with elegant purple tint.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-gradient-border">
            <div className="glass-card-header">
              <h3>Gradient Border</h3>
              <p>Premium Edition</p>
            </div>
            <div className="glass-card-body">
              <p>Advanced variant with gradient background overlay on hover.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-light">
            <div className="glass-card-header">
              <h3>With Footer</h3>
              <p>Complete Card</p>
            </div>
            <div className="glass-card-body">
              <p>Example of a complete card structure with header, body, and footer.</p>
            </div>
            <div className="glass-card-footer">
              <button style={{ 
                background: 'rgba(255,255,255,0.2)', 
                border: 'none', 
                color: '#fff', 
                padding: '0.5rem 1rem', 
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }} 
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              >
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-accent">
            <div className="glass-card-header">
              <h3>Feature Card</h3>
              <p>With Icon Support</p>
            </div>
            <div className="glass-card-body">
              <p>All variants support icons, titles, and rich content structures.</p>
            </div>
            <div className="glass-card-footer">
              <span style={{ fontSize: '2rem' }}>🚀</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Usage Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card-light"
          style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0' }}
        >
          <div className="glass-card-header">
            <h3>How to Use</h3>
          </div>
          <div className="glass-card-body">
            <p><strong>Basic:</strong> <code style={{ background: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>&lt;div className="glass-card"&gt;</code></p>
            <p><strong>Light:</strong> <code style={{ background: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>&lt;div className="glass-card-light"&gt;</code></p>
            <p><strong>Dark:</strong> <code style={{ background: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>&lt;div className="glass-card-dark"&gt;</code></p>
            <p><strong>Colored:</strong> <code style={{ background: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>&lt;div className="glass-card-blue/green/purple"&gt;</code></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GlassmorphismDemo;
