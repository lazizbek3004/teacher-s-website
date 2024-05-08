import React from "react";
import './Contacts.css'
import { FaFacebook, FaGithub, FaLinkedin, FaReact, FaSms, FaTelegram, FaTwitter } from 'react-icons/fa';

function Contacts(){

    return(<>
        <div className="bigContact">
            <div className="innerContact">
                <img src="https://chingizpro.github.io/portfolio/img/footer-logo.png" alt="logo" />
                <h2>Learn, practicing, living at a time.</h2>
                <div className="wrapIcons">
                    <a href="https://t.me/ChingizPro"><div className="same"><FaTelegram className="white" /></div></a>
                    <a href="https://github.com/ChingizPro"><div className="same"><FaGithub className="white" /></div></a>
                    <a href="https://www.linkedin.com/in/chingizpro/"><div className="same"><FaLinkedin className="white" /></div></a>
                    <a href="https://www.facebook.com/ChingizProg/"><div className="same"><FaFacebook className="white" /></div></a>
                    <a href="https://twitter.com/"><div className="same"><FaTwitter className="white" /></div></a>
                    <a href="#"><div className="same"><FaSms className="white" /></div></a>
                </div>
            </div>
        </div>
    </>);
}


export default Contacts