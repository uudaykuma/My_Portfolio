import React from 'react'
import "../styles/contact.css"
import ScrollToTop from './ScrollToTop'
const Contact = () => {
    return (
        <div>
            <div className="conatct-section">
                <i class="fa fa-paper-plane fa-3x" aria-hidden="true" style={{ color: '#03203c' }}></i>
                <h1 className="contact_head">GET IN TOUCH!</h1>
                <div class="container marketing conatct-div">
                    <div class="row">
                        <div class="col-lg-4 contact-info">
                            <i class="fas fa-envelope-open-text fa-3x rounded-circle"></i>
                            <h2 className="contact_h2_headings">Drop me a mail!</h2>
                            <p className="contact_h3_headings">uudaykuma@gmail.com</p>
                        </div>
                        <div class="col-lg-4 contact-info">
                            <i class="fas fa-phone-volume fa-3x rounded-circle"></i>
                            <h2 className="contact_h2_headings">Mobile Number!</h2>
                            <p className="contact_h3_headings">7488209296</p>
                        </div>
                        <div class="col-lg-4 contact-info">
                            <i class="fab fa-linkedin-in fa-3x rounded-circle"></i>
                            <h2 className="contact_h2_headings">Drop me a message!</h2>
                            <p className="contact_h3_headings"><a href="https://www.linkedin.com/in/uday-kumar-97069a121/" rel="noreferrer" target="_blank" >Go To Linkedin</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Contact
