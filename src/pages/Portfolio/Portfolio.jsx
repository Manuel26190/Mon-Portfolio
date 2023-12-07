import './PortfolioBlock.css'
import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import {Box, Grid} from "@mui/material";
import {info} from "../../info/info";

export default function Portfolio() {
    
    return (
        <Box width={'1630px'} display={'flex'} marginTop={'90px'} >
            <Grid  container display={'flex'} >
                {info.portfolio.map((project, index) => (
                   <Grid className='grid-portfolio' justifyContent={'center'} item xs={12} md={6} key={index}>
                       <PortfolioBlock 
                            image={project.image} 
                            live={project.live} 
                            source={project.source} 
                            title={project.title}
                            description={project.description} />                        
                   </Grid>
                ))}                 
            </Grid>
        </Box>
    );
};