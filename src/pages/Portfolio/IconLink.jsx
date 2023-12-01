import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './IconLink.css';

const color = {
   background: 'linear-gradient(135deg, rgb(0, 255, 164), rgb(166, 104, 255))',
   WebkitBackgroundClip: 'text',
   WebkitTextFillColor: 'transparent',     
 };

function IconLink(props) {
   const { link, title, icon } = props;
   return (
      <a href={link} className='git-icon' style={color} target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={icon} />
         {title}
      </a>
   );
}

export default IconLink;
