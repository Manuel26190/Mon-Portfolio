import "../../styles/Header/Header.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header () {

    const [isDarkMode, setIsDarkMode] = useState(false);
      
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      
        // Modifier la couleur de fond et de texte en fonction du mode
        document.body.style.backgroundColor = isDarkMode ? 'white' : 'grey';
        document.body.style.color = isDarkMode ? 'black' : 'white';
      };
    
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        link.style.color = isDarkMode ? 'white' : 'grey';
      });
      

    return (
        <div className="div-header">           
            <nav>
                <ul>
                    <li><Link href="#">Accueil</Link></li>
                    <li><Link className="" href="#">A propos de moi</Link></li>                    
                    <li><Link href="#">Portfolio</Link></li>
                    <li><Link href="#">Contact</Link></li>                    
                    <li>
                        <button onClick={toggleTheme} className= {isDarkMode ? "theme-btn theme-mode" : "theme-btn " } >
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                        </button> 
                    </li>                    
                </ul>
            </nav>
        </div>        
    );
};

export default Header;