
import { NavLink } from 'react-router-dom';
// import ContentWrapper from '../contentWrapper/contentWrapper';

import "./Footer.scss"
import React from "react";

import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from '../contentWrapper/ContentWrapper';


const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
        
              
                <div className="socialIcons">
                  <NavLink to={"https://github.com/Chandan8585"}  className="socials"> <span className="icon">
                        < FaGithub />
                    </span>
                    </NavLink> 
                 <NavLink to={"https://www.linkedin.com/in/chandan-pratap-464386154/"} className="socials">   <span className="icon">
                      <FaLinkedin />
                    </span>
                    </NavLink>
                   <NavLink to={"https://twitter.com/chandanpra25704"} className="socials">
                   <span className="icon">
                    <FaTwitter />   
                    </span>
                    </NavLink> 
                </div>
                <div className="infoText">
                 Made with ❤️ by Chandan Pratap 
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
