import React from 'react'
import Typed from "react-typed"
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Full Stack Web Developer</h1>
                <Typed className="typed-text"
                strings={["Full Stack Web Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                 />
                 <a href="#header" className="btn-main-offer">RESUME</a>
            </div>
        </div>
    )
}

export default Header
