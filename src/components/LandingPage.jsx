import React from 'react'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Navbar from './Navbar'
import Projects from './Projects'
import Resume from './Resume'
import Skills from './Skills'

const LandingPage = () => {
    return (
        <div>
            
            <Navbar />
            <Header />
            <section id="home">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <Resume />
            <section id="contact">
                <Contact />
            </section>
        </div >
    )
}

export default LandingPage
