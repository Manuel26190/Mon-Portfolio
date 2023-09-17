import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import { faLaptop, faCode } from '@fortawesome/free-solid-svg-icons';
import './PortfolioBlockBis.css';


function PortfolioBlock(props) {
   const {image, live, source, title,} = props;
   return (
      <Box className={'box-first-container'} >         
         <a href="http://www.thedresscounter.com/" target="_blank">
  <div class="container">
    <div class="background-img">
      <div class="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
        <h2>{title}</h2>
          <p><a>All our modules are designed to play nicely with responsive of course. At the end of the day it comes down to the theme you use - our code doesn't get in your way.</a></p>
        </div>        
      </div>
    </div>
  </div>

  </a>
         <Box  component={'img'} className='box-image' src={image} alt={'mockup'}/>         
         <Box className={'portfolio'} py={'2rem'}>
            <Box className={'icon-box'} p={1}>
               <IconLink link={live} title={'Live Demo'} icon={faLaptop} />
            </Box>
            <Box className={'icon-box'} p={1} >
               <IconLink link={source} title={'Source Code'} icon={faCode} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;