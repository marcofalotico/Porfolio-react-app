import React from "react";
import { FiInstagram, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://instagram.com/marcofalotico_" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
            <a href="https://www.github.com/marcofalotico" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/marco-falotico-80a467177/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;