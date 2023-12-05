import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './PortfolioBlock.css';


function PortfolioBlock(props) {
   const {image, live, source, title, description} = props;

   //   if (live == []){
   //      return (
   //       <Box className={'box-first-container'} >         
   //       <a href={live} target="_blank" rel='noreferrer'>
   //       <div className="container">
   //          <div className="background-img" style={{ backgroundImage: `url(${image})` }}>
   //             <div className="box">                  
   //                <span className='span-text'></span>
   //                <div className="content">
   //                   <p className='portfolio-title'>{title}</p>
   //                   <p className='portfolio-descritpion'>{description}</p>
   //                </div>        
   //             </div>
   //          </div>
   //       </div>
   //       </a>                  
   //       <Box className={'portfolio'} py={'2rem'}>            
   //          <Box className={'icon-box'} p={1} >
   //             <IconLink link={source} title={'Source Code'} icon={faCode} />
   //          </Box>
   //       </Box>
   //    </Box>
   //      ) 
   // }


   return (
      <Box className={'box-first-container'} >         
         <a href={live} target="_blank" rel='noreferrer'>
         <div className="container">
            <div className="background-img" style={{ backgroundImage: `url(${image})` }}>
               <div className="box">                  
                  <span className='span-text'></span>
                  <div className="content">
                     <p className='portfolio-title'>{title}</p>
                     <p className='portfolio-descritpion'>{description}</p>
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