import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import { faLaptop, faCode } from '@fortawesome/free-solid-svg-icons';
import './PortfolioBlock.css';


function PortfolioBlock(props) {
   const {image, live, source, title,} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box  component={'img'} className='box-image' src={image} alt={'mockup'}/>         
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'}  gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={faLaptop} />
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={faCode} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;