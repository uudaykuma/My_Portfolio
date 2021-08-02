import React from 'react'
import "../styles/about.css"
const About = () => {
    return (
        <div className="about-section">
            <div class="row featurette">
                <div class="col-md-5 order-md-1">
                    <img className="profile-pic" src="https://media-exp1.licdn.com/dms/image/C5603AQFgbr3djRuu9A/profile-displayphoto-shrink_800_800/0/1615875058102?e=1631750400&v=beta&t=YbMY7PXB940KCrKajTXsFM74eAKwNheBgEVI5MZ-kK4" alt="" />
                </div>
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading about-head">ABOUT</h2>
                    <p class="lead summary-text">A passionate aspiring Full Stack Developer skilled in MERN stack, able to apply programming skills to solve complex challenges and work on technologies like HTML, CSS, JavaScript, React, Redux, Material-UI, Tailwind CSS.Eager to gain a dynamic and challenging role in the field of Software Development that will offer the opportunity for further development of my abilities, skills, and knowledge in an organization.</p>
                    <a href="https://github.com/uudaykuma" rel="noreferrer" target="_blank" ><i class="fab fa-github fa-2x github-logo"></i></a>
                    <a href="https://www.linkedin.com/in/uday-kumar-97069a121/" rel="noreferrer" target="_blank" ><i class="fab fa-linkedin-in fa-2x linkedin-logo"></i></a>
                </div>
            </div>
        </div>
    )
}

export default About
