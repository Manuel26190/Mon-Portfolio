import "../../styles/Header/Header.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../../styles/index/index.css'

function Header () {

    const [isDarkMode, setIsDarkMode] = useState(false);
      
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.style.backgroundColor = isDarkMode ? 'white' : 'grey';
    };

    return (
        <section>
            <div className="app">
      <button onClick={toggleTheme} className="theme-toggle-button">
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>      
    </div>
            <nav>
                <ul>
                    <li><a href="#">A propos de moi</a></li>
                    <li><a href="#">Compétences</a></li>
                    <li><a href="#">Projets</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </section>        
    );
};

export default Header;