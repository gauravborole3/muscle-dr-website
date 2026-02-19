import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import productData from '../data/products.json';

function Products() {
  const products = [...productData];

  // 🔍 Search state
  const [searchTerm, setSearchTerm] = useState("");

  // 🔎 Filter logic
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <section className="products-section">
      <div className="container">

        {/* Section Header */}
        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="products-title">Recommended Products</h2>
          <p className="products-subtitle">
            Premium fitness and rehabilitation products to support your recovery journey
          </p>
        </motion.div>

        {/* 🔍 Search Bar */}
        <motion.div
          className="products-search"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="products-search-input"
          />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                affiliateLink={product.affiliateLink}
                badge={product.badge}
                rating={product.rating}
                reviews={product.reviews}
                category={product.category}
              />
            ))
          ) : (
            <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
              No products found.
            </p>
          )}
        </motion.div>

        {/* Affiliate Disclaimer */}
        <motion.div
          className="affiliate-disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            As an affiliate, we earn a commission from qualifying purchases.
            This helps support our clinic while providing you with high-quality products.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Products;
