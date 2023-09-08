import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconLink(props) {
   const { link, title, icon } = props;
   return (
      <a href={link} target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={icon} />
         {title}
      </a>
   );
}

export default IconLink;
