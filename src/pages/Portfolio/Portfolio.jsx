import './PortfolioBlock.css'
import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import {info} from "../../info/info";
import "./Portfolio.css";

export default function Portfolio() {
    
    return (
        <div className="div-box"  >            
            {info.portfolio.map((project, index) => (                
                    <PortfolioBlock 
                        image={project.image} 
                        live={project.live} 
                        source={project.source} 
                        title={project.title}
                        description={project.description} />                 
            ))}             
        </div>
    );
};