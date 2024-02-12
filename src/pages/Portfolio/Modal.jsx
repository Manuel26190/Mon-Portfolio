import React, { useState } from "react";
import "./Modal.css";
import { info } from "../../info/info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Modal() {
console.log(info.portfolio[5].image)

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setOpen] = useState(true);

    const handlePreviousClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + info.portfolio[5].live.length) % info.portfolio[5].live.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % info.portfolio[5].live.length);
    };  
    
    const handleClose = () => {        
        setOpen(!isOpen)        
    };    

    return (
        <div className={`modal-container ${isOpen ? 'open' : 'close'}`}>
            <button className="close-btn" onClick={handleClose}>Fermer</button>
            <button className="preview-btn" onClick={handlePreviousClick}>
                <FontAwesomeIcon className="chevron-icon" icon={faChevronLeft} />
            </button>
            <div className="img-div">
                <img className="img-modal" src={info.portfolio[5].live[currentIndex]} alt="" />
            </div>
            <button className="next-btn" onClick={handleNextClick}>
                <FontAwesomeIcon className="chevron-icon" icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Modal;
