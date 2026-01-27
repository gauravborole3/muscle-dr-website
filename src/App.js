import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Products from './pages/Products';
import GlassmorphismDemo from './components/GlassmorphismDemo';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  // Scroll to top when route changes
  useScrollToTop();

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/glass-cards" element={<GlassmorphismDemo />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 The Muscle Dr. All rights reserved.<br/> Developed By Gaurav Borole</p>
      </footer>
    </div>
  );
}

export default App;
