import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './IconLink.css';
import { yellow } from '@mui/material/colors';

const color = {
   background: 'linear-gradient(135deg, rgb(0, 255, 164), rgb(166, 104, 255))',
   WebkitBackgroundClip: 'text',
   WebkitTextFillColor: 'transparent',    
   color: 'yellow'
 };

function IconLink(props) {
   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
   };
   
   const { link, title, icon } = props;
   
   return (
      <a href={link} style={color} target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon className={`git-icon ${isDarkMode ? 'dark-mode' : ''}`} icon={icon} />
         {title}
      </a>
   );
}

export default IconLink;
