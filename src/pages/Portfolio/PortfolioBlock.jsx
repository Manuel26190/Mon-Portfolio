import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import { faLaptop, faCode } from '@fortawesome/free-solid-svg-icons';
import './PortfolioBlock.css';


function PortfolioBlock(props) {
   const {image, live, source, title,} = props;
   return (
      <Box className={'box-first-container'} >
         <h1>{title}</h1>
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