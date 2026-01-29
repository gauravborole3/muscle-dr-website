import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Products from './pages/Products';
import useScrollToTop from './hooks/useScrollToTop';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { FaInstagram, FaWhatsapp, FaFacebook,FaYoutube } from 'react-icons/fa';
import Chatbot from "./components/Chatbot";
import ShortsPage from "./pages/ShortsPage";




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
        <Route path = "/blog" element = {<Blog/>}/>
        <Route path = "/blog/:id" element = {<BlogPost/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/glass-cards" element={<GlassmorphismDemo />} /> */}
        <Route path="/shorts" element={<ShortsPage />} />
      </Routes>
      <Chatbot />
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 The Muscle Dr. All rights reserved.<br/> Developed By Gaurav Borole</p>
          <div className="footer-socials">
    <a
      href="https://www.instagram.com/the_muscledr/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="https://wa.me/916266228811"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaFacebook />
    </a>
    <a
      href="https://www.youtube.com/@TheMuscleDr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Youtube"
    >
      <FaYoutube />
    </a>
  </div>
      </footer>
    </div>
  );
}

export default App;
