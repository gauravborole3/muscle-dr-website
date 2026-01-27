import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProductCard = ({
  image,
  name,
  description,
  price,
  affiliateLink,
  badge,
  rating,
  reviews,
  category
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const hoverVariants = {
    hover: { y: -8, transition: { duration: 0.3 } }
  };

  const handleAffiliateClick = () => {
    if (affiliateLink) {
      window.open(affiliateLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="product-card"
      initial="initial"
      whileInView="whileInView"
      whileHover="hover"
      variants={{ ...cardVariants, ...hoverVariants }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Product Image Container */}
      <div className="product-card-image-wrapper">
        <img 
          src={image} 
          alt={name} 
          className="product-card-image"
        />
        
        {/* Badge */}
        {badge && (
          <span className="product-badge">{badge}</span>
        )}

        {/* Rating Stars */}
        {rating && (
          <div className="product-rating">
            <span className="stars">{'⭐'.repeat(Math.floor(rating))}</span>
            {reviews && <span className="review-count">({reviews})</span>}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="product-card-content">
        {/* Category */}
        {category && (
          <span className="product-category">{category}</span>
        )}

        {/* Product Name */}
        <h3 className="product-card-name">{name}</h3>

        {/* Description */}
        <p className="product-card-description">{description}</p>

        {/* Price */}
        <div className="product-card-price">
          <span className="price">₹{price}</span>
        </div>

        {/* Buy Button */}
        <button
          className="product-card-button"
          onClick={handleAffiliateClick}
          aria-label={`Buy ${name} on Decathlon`}
        >
          Buy on Decathlon
          <span className="button-arrow">→</span>
        </button>
      </div>
    </motion.div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  affiliateLink: PropTypes.string.isRequired,
  badge: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  category: PropTypes.string
};

ProductCard.defaultProps = {
  badge: null,
  rating: null,
  reviews: null,
  category: null
};

export default ProductCard;
