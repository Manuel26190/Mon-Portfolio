import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index/index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
//import App from './App';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';
import AboutMePage from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
          <Header />
            <Routes>
                <Route path="/" component={<HomePage />} />
                <Route path="/about" component={<AboutMePage />} />
                <Route path="/portfolio" component={<Portfolio />} />                
                
            </Routes>
      </Router>
  </React.StrictMode>
)


