import React from "react";
import './Home.css'

// so link for logo https://chingizpro.github.io/portfolio/img/footer-logo.png
// ok another one https://chingizpro.github.io/portfolio/img/logo.png
// so this one is for person in the middle https://chingizpro.github.io/portfolio/img/person.png
// code thinking https://chingizpro.github.io/portfolio/img/code%20thinking.png


function Home(){

    return(<>
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                    <a href="#"><img src="https://chingizpro.github.io/portfolio/img/logo.png" alt="" /></a>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="../Skills/skills.jsx">About me</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </nav>  
            <div className="hero">
                <h1>Front-end developer</h1>
                <p>I like coding and creating websites</p>
                <img className="image1" src="https://chingizpro.github.io/portfolio/img/person.png" alt="" />
                <img className="image2" src="https://chingizpro.github.io/portfolio/img/code%20thinking.png" alt="theimage" />
            </div>



        </div>
    </>);
}

export default Home