import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/index.css';
import './index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutMePage from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
          <Header />
            <Routes>
                <Route path="/home-portfolio" element={<HomePage />} />
                <Route path="/about" element={<AboutMePage />} />
                <Route path="/portfolio" element={<Portfolio />} />                
                <Route path="/contact" element={<Contact />} />                
            </Routes>
          <Footer />
      </Router>
  </React.StrictMode>
);


