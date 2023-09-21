import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './PortfolioBlockBis.css';


function PortfolioBlock(props) {
   const {image, live, source, title, description} = props;
   return (
      <Box className={'box-first-container'} >         
         <a href={live} target="_blank" rel='noreferrer'>
         <div class="container">
            <div class="background-img" style={{ backgroundImage: `url(${image})` }}>
               <div class="box">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className='span-text'></span>
                  <div class="content">
                     <p className='portfolio-title'>{title}</p>
                     <p>{description}</p>
                  </div>        
               </div>
            </div>
         </div>
         </a>                  
         <Box className={'portfolio'} py={'2rem'}>            
            <Box className={'icon-box'} p={1} >
               <IconLink link={source} title={'Source Code'} icon={faCode} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;