import './PortfolioBlock.css'
import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import {info} from "../../info/info";
import "./Portfolio.css";

export default function Portfolio() {
    
    return (
        <section className='portfolio-section'>
            <div className="div-box"   >            
            {info.portfolio.map((project, index) => ( 
                <div className='div-box-before' key={index}>
                <PortfolioBlock 
                        image={project.image} 
                        live={project.live} 
                        source={project.source} 
                        title={project.title}
                        description={project.description} />
                </div>                       
            ))}             
        </div>
        </section>
        
    );
};