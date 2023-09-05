import React from "react";
import './Terminal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Terminal ({text}) {
    return (
        <section className="terminal-section">
            <div className="banner-div">
                <FontAwesomeIcon className="icon red" icon={faCircle} />
                <FontAwesomeIcon className="icon yellow" icon={faCircle} />
                <FontAwesomeIcon className="icon green" icon={faCircle} />
            </div>
            <div className="terminal-div">
                <p>{text}</p>                               
            </div>
        </section>
    )
}

export default Terminal;