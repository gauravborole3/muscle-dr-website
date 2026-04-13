import './App.css';
import { Routes, Route } from 'react-router-dom';
import Maintenance from './pages/Maintenance';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  // Scroll to top when route changes
  useScrollToTop();

  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Maintenance />} />
      </Routes>
    </div>
  );
}

export default App;
