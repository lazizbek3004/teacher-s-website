import React from "react";
import "./Resume.css"

function Resume(){

    return(<>
        <div className="bigResume">
            <div className="innerResume">
                <div className="top">
                    <h1>Short Resume</h1>
                    <h2>Work Experience</h2>
                    <ul>
                        <li>Have taught a lot of students from English</li>
                        <li>Have worked on many web technologies on my own</li>
                        <li>Participated in some contests online and offline, globally and locally</li>
                        <li>Designed and created different types of front-end templates</li>
                        <li>Also tried to work as a freelancer</li>
                    </ul>

                </div>
                <a href="https://chingizpro.github.io/portfolio/docs/Resume%20-%20Chingiz%20Gaffarov.pdf"><button className="btn">Full Resume</button></a>
            </div>
        </div>
    </>);
}

export default Resume