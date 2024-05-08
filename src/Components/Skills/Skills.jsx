import React from "react";
import './Skills.css'
import { FaBeer, FaBootstrap, FaClone, FaCss3, FaDesktop, FaFile, FaFileCode, FaGit, FaGlobe, FaGraduationCap, FaHtml5, FaJs, FaLanguage, FaLinux, FaPhp, FaPython, FaSass, FaSpa } from "react-icons/fa";


function Skills(){

    return(<>
        <div className="wrapper">
            <div className="wrap">
                <div className="box">
                    <FaDesktop className="icon1" />
                    <h1 className="end">Front-end Developer</h1>
                    <p className="data">I am highly interested in working on front-end and creating really attractive pages.</p>
                    <ul className="programm">
                        <li><FaHtml5 />  <span>HTML</span></li>
                        <li><FaCss3 />  <span>CSS</span></li>
                        <li><FaSass />  <span>Sass</span></li>
                        <li><FaBootstrap />  <span>Bootstrap</span></li>
                        <li><FaJs />  <span>JavaScript</span></li>
                        <li><FaFileCode />  <span>Jquery</span></li>
                        <li><FaGit />  <span>Git</span></li>
                    </ul>
                </div>
                <div className="box">
                   <FaGraduationCap className="icon1" />
                   <h1 className="end">Learner</h1>
                    <p className="data">I always want to learn what I need to know and try to practice. Knowledge is power.</p>        
                    <ul className="programm">
                        <li><FaPython /><span>Python</span></li>
                        <li><FaPhp /><span>PHP</span></li>
                        <li><FaFileCode /><span>JSON</span></li>
                        <li><FaFileCode /><span>XML</span></li>
                        <li><FaCss3 /><span>C++</span></li>
                        <li><FaSpa /><span>PS</span></li>
                        <li><FaLinux /><span>Linux</span></li>
                    </ul>
                </div>
                <div className="box">
                    <FaLanguage className="icon1" />
                    <h1 className="end">Languages</h1>
                    <p className="data">I am good at foreign lnguages, they are very interesting and important in my opinion</p>
                    <ul className="programm">
                        <li><FaGlobe/> <span>Uzbek</span></li>
                        <li><FaGlobe/> <span>English</span></li>
                        <li><FaGlobe/> <span>Russian</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}


export default Skills