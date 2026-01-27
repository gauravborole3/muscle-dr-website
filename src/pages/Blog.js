import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Back Pain: Common Causes and Solutions',
      category: 'Pain Management',
      excerpt: 'Back pain affects millions of people worldwide. Learn about the most common causes of back pain and how physiotherapy can help you find relief and prevent future issues.',
      date: '2024-01-20',
      author: 'PT. Nidhish Ingle',
      readTime: '5 min read',
      image: '📚',
    },
    {
      id: 2,
      title: 'The Benefits of Sports Physiotherapy for Athletes',
      category: 'Sports & Recovery',
      excerpt: 'Whether you\'re a professional athlete or a weekend warrior, sports physiotherapy can improve performance and prevent injuries. Discover the key benefits and techniques used in sports PT.',
      date: '2024-01-18',
      author: 'PT. Nidhish Ingle',
      readTime: '6 min read',
      image: '⚽',
    },
    {
      id: 3,
      title: 'Ergonomics at Work: Preventing Repetitive Strain Injuries',
      category: 'Workplace Health',
      excerpt: 'Spending hours at a desk? Learn how proper ergonomics can prevent repetitive strain injuries like carpal tunnel syndrome. We share practical tips for a healthier workspace.',
      date: '2024-01-16',
      author: 'PT. Nidhish Ingle',
      readTime: '7 min read',
      image: '💻',
    },
    {
      id: 4,
      title: 'Post-Surgery Rehabilitation: What to Expect',
      category: 'Recovery',
      excerpt: 'After orthopedic surgery, proper rehabilitation is crucial for optimal recovery. Learn about the phases of rehabilitation and how physiotherapy accelerates your healing process.',
      date: '2024-01-14',
      author: 'PT. Nidhish Ingle',
      readTime: '8 min read',
      image: '🏥',
    },
    {
      id: 5,
      title: 'Neck Pain Relief: Exercises and Stretches You Can Do at Home',
      category: 'Pain Management',
      excerpt: 'Suffering from neck pain? Discover simple yet effective exercises and stretches that you can perform at home to relieve tension and improve mobility.',
      date: '2024-01-12',
      author: 'PT. Nidhish Ingle',
      readTime: '5 min read',
      image: '🧘',
    },
    {
      id: 6,
      title: 'Arthritis Management Through Physiotherapy',
      category: 'Chronic Conditions',
      excerpt: 'Living with arthritis doesn\'t mean limiting your activities. Learn how targeted physiotherapy exercises can reduce pain, improve flexibility, and enhance your quality of life.',
      date: '2024-01-10',
      author: 'PT. Nidhish Ingle',
      readTime: '7 min read',
      image: '💪',
    },
    {
      id: 7,
      title: 'The Role of Mobility Exercises in Injury Prevention',
      category: 'Prevention',
      excerpt: 'Prevention is better than cure. Explore the importance of mobility exercises in maintaining joint health and preventing common injuries in daily life and sports.',
      date: '2024-01-08',
      author: 'PT. Nidhish Ingle',
      readTime: '6 min read',
      image: '🏃',
    },
    {
      id: 8,
      title: 'Shoulder Pain: Diagnosis and Treatment Options',
      category: 'Pain Management',
      excerpt: 'Shoulder pain can severely impact your daily activities. Discover the various causes of shoulder pain and the most effective physiotherapy treatment options available.',
      date: '2024-01-06',
      author: 'PT. Nidhish Ingle',
      readTime: '8 min read',
      image: '🩺',
    },
    {
      id: 9,
      title: 'Running Injuries: Prevention and Treatment Guide',
      category: 'Sports & Recovery',
      excerpt: 'Runners often face common injuries like shin splints and runner\'s knee. Learn prevention strategies and treatment approaches to keep running strong.',
      date: '2024-01-04',
      author: 'PT. Nidhish Ingle',
      readTime: '9 min read',
      image: '🏅',
    },
  ];

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
        className="page-header blog-header"
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
          <h1>Physiotherapy Blog</h1>
          <p>Expert insights, tips, and advice to help you stay healthy and pain-free</p>
        </motion.div>
      </motion.section>

      {/* Category Filter Section */}
      <motion.section 
        className="blog-filter-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Filter by Category</h2>
          <div className="category-buttons">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section 
        className="blog-posts-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <motion.div 
            className="blog-posts-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredPosts.map((post) => (
              <motion.div 
                key={post.id}
                className="blog-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  boxShadow: '0 20px 40px rgba(25, 103, 210, 0.25)' 
                }}
              >
                {/* Blog Card Image/Icon */}
                <div className="blog-card-image">
                  <span className="blog-icon">{post.image}</span>
                </div>

                {/* Blog Card Content */}
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>

                  <h3 className="blog-title">{post.title}</h3>

                  <p className="blog-excerpt">{post.excerpt}</p>

                  <div className="blog-footer">
                    <div className="blog-author-info">
                      <span className="blog-author">{post.author}</span>
                      <span className="blog-read-time">• {post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="read-more-link">
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div 
              className="no-posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No blog posts found in this category.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Newsletter CTA Section */}
      <motion.section 
        className="blog-newsletter-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest physiotherapy tips, health advice, and wellness updates delivered to your inbox</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Blog;
