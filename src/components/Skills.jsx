import React from 'react'
import "../styles/skills.css"

const Skills = () => {
    return (
        <div className="skill-section">
        <h1>Skills</h1>
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="skills-logo">
                                    <img className="skills-image" src="https://img.icons8.com/ios/2x/react-native.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h1 className="skills-headings">FRONT END</h1>

                                    <h3 className="skill-topics">HTML, CSS, Javascript, React, Redux, Material UI.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="skills-logo">
                                    <img className="skills-image" src="https://cdn1.iconfinder.com/data/icons/web-mobile-development-1/100/Server_side-512.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h1 className="skills-headings">BACK END</h1>
                                    <h3 className="skill-topics">Node, Express, MongoDB.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="skills-logo">
                                    <img className="skills-image" src="https://static.thenounproject.com/png/1871524-200.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h1 className="skills-headings">DATA STRUCTURES & ALGORITHMS</h1>
                                    <h3 className="skill-topics">Arrays,Stacks and Queues,Sorting Algorithms.</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
