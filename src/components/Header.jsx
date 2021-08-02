import React from 'react'
import Typed from "react-typed"
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">

                <h1>Hi, I am Uday Kumar</h1>
                <Typed className="typed-text"
                    strings={["Full Stack Web Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <button style={{fontSize:'20px',fontWeight:'600'}} className="resumeBtn"><a href="https://drive.google.com/file/d/1YDBgoXNkAIdN9S4ZP3FZVUeuxoA6RIqU/view?usp=sharing" target="_blank" rel="noreferrer" style={{letterSpacing:'2px'}}>
                    RESUME
                </a>
                </button>
            </div>
        </div>
    )
}

export default Header
