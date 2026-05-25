import React from "react";
import { FiInstagram, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://instagram.com/marcofalotico_" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
            </a>
            <a href="https://www.github.com/marcofalotico" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/marco-falotico-80a467177/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;