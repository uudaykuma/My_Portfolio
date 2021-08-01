import React from 'react'
import About from './About'
import Header from './Header'
import Navbar from './Navbar'
import Projects from './Projects'
import ScrollToTop from './ScrollToTop'
import Skills from './Skills'

const LandingPage = () => {
    return (
        <div>
            <ScrollToTop />
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
        </div >
    )
}

export default LandingPage
