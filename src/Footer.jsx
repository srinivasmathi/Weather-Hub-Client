import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faFacebook,faLinkedin} from "@fortawesome/free-brands-svg-icons";


export default function Footer(){
    return(
        <div className="footer blur-background">
            <p className="icons">
                <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} size="xl" />
                <a href="https://github.com/srinivasmathi"><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} size="xl" /></a>
                <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} size="xl" />
            </p>
            <p>© Made with 🤍 by Srinivas M(Student at SASTRA DEEMED UNIVERSITY)</p>
        </div>
    );
}