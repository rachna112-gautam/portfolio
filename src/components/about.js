import React from 'react'
import Profile from './profile.jpg';
export default function about() {
    return (
        <section className="about" id="about">
            <h2 className="section-title">About</h2>
            <div className="container">
                <div className="row container">
                    <div className="col-lg-5 ">
                        <div className="my__img">
                            <img src={Profile} alt="Rachna Gautam"></img>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 about-info">
                        <h2>Hi there! I am Rachna Gautam</h2>
                        <p >I'm 21 years old creative web designer based in Ghaziabad, specializing in User Interface Design and Development. I build clean, appealing, and functional interfaces which comply with the latest web standards.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="btnn">
                            <button type="button" className="btn cv">Download CV</button>
                            <a type="button" className="btn contact" href="#contact">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
