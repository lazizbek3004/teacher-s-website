import React, { useState } from "react";
import './Portfolio.css'

function Portfolio(){
    const [isOver, setIsOver] = useState(false)

    function mouseOver(){
        setIsOver(i => i=true)
    }
    function mouseOut(){
        setIsOver(i => i=false)
    }

    const [isOverTel, setIsOverTel] = useState(false)
    
    function mouseOverTel(){
        setIsOverTel((i => i=true))
    }
    function mouseOutTel(){
        setIsOverTel((i => i=false))
    }

    const [isOverMov, setIsOverMov] = useState(false)
    
    function mouseOverMov(){
        setIsOverMov((i => i=true))
    }
    function mouseOutMov(){
        setIsOverMov((i => i=false))
    }

    const [isOverVal, setIsOverVal] = useState(false)
    
    function mouseOverVal(){
        setIsOverVal((i => i=true))
    }
    function mouseOutVal(){
        setIsOverVal((i => i=false))
    }

    const [isOverLab, setIsOverLab] = useState(false)
    
    function mouseOverLab(){
        setIsOverLab((i => i=true))
    }
    function mouseOutLab(){
        setIsOverLab((i => i=false))
    }

    const [isOverCount, setIsOverCount] = useState(false)
    
    function mouseOverCount(){
        setIsOverCount((i => i=true))
    }
    function mouseOutCount(){
        setIsOverCount((i => i=false))
    }
    return(<>
        <div className="bigPor">
            <div className="inner"
                onMouseOver={() => mouseOver()}
                onMouseOut={() => mouseOut()}>
                <div className={!isOver? "before active" : "before inActive"}>
                    <h1>E-shop</h1>
                    <p>Online shopping web-platform front-end. I tried to use and learn new skills while working. Almost all interactivity was done by the help of fresh JavaScript.</p>
                </div>
                <div className={isOver ? "after active" : "after inActive"}>
                    <h1>What I used:</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Sass</li>
                        <li>JavaScript</li>
                    </ul>
                    <a href="https://chingizpro.github.io/e-bozor/"><button>Open E-shop</button></a>
                </div>
            </div>
            <div className="telegram"
                onMouseOver={() => mouseOverTel()}
                onMouseOut={() => mouseOutTel()}>
                <div className={!isOverTel? "beforeTel activeTel" : "beforeTel inActiveTel"}>
                    <h1>Web Telegram</h1>
                    <p>In this project I mainly learned how to use bootstrap and change its default and also behaviour to create more different and unique view.</p>
                </div>
                <div className={isOverTel? "afterTel activeTel" : "afterTel inActiveTel"}>
                <h1>What I used:</h1>
                    <ul>
                        <li>HTML,CSS</li>
                        <li>BootStrap</li>
                        <li>Sass</li>
                        <li>JavaScript</li>
                    </ul>
                    <a href="https://chingizpro.github.io/telegram-demo/"><button>Open Web Telegram</button></a>
                </div>
            </div>
            <div className="movie"
                onMouseOver={() => mouseOverMov()}
                onMouseOut={() => mouseOutMov()}>
                <div className={!isOverMov? "beforeMov activeMov" : "beforeMov inActiveMov"}>
                <h1>Movie Search</h1>
                    <p>There is a base of movies their additional information. With JavaScript the movies were sorted... categorized. In a word, I worked on them.</p>
                </div>
                <div className={isOverMov? "afterMov activeMov" : "afterMov inActiveMov"}>
                <h1>What I used:</h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>Sass</li>
                        <li>CSS</li>
                        <li>Algorithms</li>
                    </ul>
                    <a href="https://chingizpro.github.io/movies/"><button>Open Movie Search</button></a>
                </div>
            </div>
            <div className="volunteer"
                onMouseOver={() => mouseOverVal()}
                onMouseOut={() => mouseOutVal()}>
                <div className={!isOverVal? "beforeVal activeVal" : "beforeVal inActiveVal"}>
                <h1>Volunteering Platform</h1>
                    <p>I tried to create a platform with pretty design and view. Mainly CSS skills were used to work with this project. I also used my designing skills.</p>
                </div>
                <div className={isOverVal? "afterVal activeVal" : "afterVal inActiveVal"}>
                <h1>What I used:</h1>
                    <ul>
                        <li>Sass</li>
                        <li>Bootstrap</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                    <a href="https://chingizpro.github.io/volunteering/"><button>Open Volunteering</button></a>
                </div>
            </div>
            <div className="lab"
                onMouseOver={() => mouseOverLab()}
                onMouseOut={() => mouseOutLab()}>
                <div className={!isOverLab ? "beforeLab activeLab" : "beforeLab inActiveLab"}>
                <h1>App Lab</h1>
                    <p>I worked in Photoshop most of my time while doing this project. My photoshop skills were tested with this one. It is a landing page of website that is about apps.</p>
                </div>
                <div className={isOverLab ? "afterLab activeLab" : "afterLab inActiveLab"}>
                <h1>What I used:</h1>
                    <ul>
                        <li>Photoshop</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                    <a href="https://chingizpro.github.io/App-Lab/"><button>Open App Lab</button></a>
                </div>
            </div>
            <div className="count"
                onMouseOver={() => mouseOverCount()}
                onMouseOut={() => mouseOutCount()}>
                <div className={!isOverCount? "beforeCount activeCount" : "beforeCount inActiveCount"}>
                    <h1>React Counter</h1>
                    <p>With basic knowledge of react, I tried to create a counter app that contains other counters. I have worked with virtual DOM, states, raising and handling methods and stuff like that.</p>
                </div>
                <div className={isOverCount? "afterCount activeCount" : "afterCount inActiveCount"}>
                <h1>What I used:</h1>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                    <a href="https://chingizpro.github.io/react-counter-app/"><button>React Counter</button></a>
                </div>
            </div>


        </div>
    </>);
}

export default Portfolio