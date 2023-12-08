import "./Header.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Header () {


    // Gestion du dark mode
    const [isDarkMode, setIsDarkMode] = useState(true);
      
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);        
        document.body.style.backgroundColor = isDarkMode ? 'white' : 'black' ;
        document.body.style.color = isDarkMode ? 'black' : 'white' ;      

      };
    
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        link.style.color = isDarkMode ? 'white' : 'black';
      });
    
    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <div className="div-header">           
            <nav>
                <ul>
                    <li><Link to="/home-portfolio" className= {currentPage === '/home-portfolio'? 'nav-link faHouse active' : 'nav-link faHouse'}><FontAwesomeIcon icon={faHouse} /></Link></li>
                    <li><Link to="/about" className={currentPage === '/about'? 'nav-link active' : 'nav-link'}>A propos de moi</Link></li>
                    <li><Link to="/portfolio" className={currentPage === '/portfolio'? 'nav-link active' : 'nav-link'}>Portfolio</Link></li>
                    <li><Link to="/contact" className={currentPage === '/contact'? 'nav-link active' : 'nav-link'}>Contact</Link></li>
                    <li>
                        <button onClick={toggleTheme} className={isDarkMode ? "theme-btn theme-mode" : "theme-btn "}>
                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>        
    );
};

export default Header;