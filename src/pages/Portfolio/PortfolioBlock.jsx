import React, { useState } from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import { faCode, faDisplay, faL } from '@fortawesome/free-solid-svg-icons';
import './PortfolioBlock.css';
import Modal from './Modal';

function PortfolioBlock(props) {
   const { image, live, source, title, description } = props;

   const [isOpen, setOpen] = useState(false);

   const handleOpen = () => {     
      setOpen(!isOpen);     
   };

   if (!live || live.length === 4) {
      return (
         <Box className={'box-first-container'}>
            <a className='project-link' onClick={handleOpen}>
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
            {isOpen && <Modal />}
            <Box className={'portfolio'} py={'2rem'}>
               <Box className={'icon-box'} p={1} >
                  <IconLink link={source} title={'Source Code'} icon={faCode} />
               </Box>
            </Box>
         </Box>
      )
   } else {
      return (
         <Box className={'box-first-container'}>
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
}

export default PortfolioBlock;
