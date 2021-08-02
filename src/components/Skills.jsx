import React from 'react'
import "../styles/skills.css"

const Skills = () => {
    return (
        <div className="skill-section">
            <h1>MY PROFICIENCY</h1>
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


            <div className="tech_stack_div">
                <h2 className="t-s-heading">TECH STACK</h2>
                <div class="container marketing conatct-div">
                    <div class="row">
                        <div class="col-lg-4 contact-info">
                            <img class="" src="https://cdn.worldvectorlogo.com/logos/html5.svg" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img src="https://cdn.worldvectorlogo.com/logos/css3.svg" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img src="https://material-ui.com/static/logo.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img src="https://www.svgrepo.com/show/303232/mongodb-logo.svg" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img src="data:image/png;base64,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" alt="" width="100" height="40" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Skills
