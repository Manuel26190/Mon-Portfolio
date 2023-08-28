import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index/index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutMePage from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
          <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutMePage />} />
                <Route path="/portfolio" element={<Portfolio />} />                
            </Routes>
      </Router>
  </React.StrictMode>
);


