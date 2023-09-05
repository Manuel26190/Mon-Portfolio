import React from "react";
import './Terminal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Terminal () {
    return (
        <section className="terminal-section">
            <div className="banner-div">
                <FontAwesomeIcon className="red-icon" icon={faCircle} />
                <FontAwesomeIcon className="yellow-icon" icon={faCircle} />
                <FontAwesomeIcon className="green-icon" icon={faCircle} />
            </div>
            <div className="terminal-div">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus in consectetur animi a quibusdam, explicabo corporis neque nesciunt! Dolores recusandae quos molestiae ipsa exercitationem reprehenderit explicabo quisquam ratione mollitia.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus in consectetur animi a quibusdam, explicabo corporis neque nesciunt! Dolores recusandae quos molestiae ipsa exercitationem reprehenderit explicabo quisquam ratione mollitia.</p>
            </div>
        </section>
    )
}

export default Terminal;