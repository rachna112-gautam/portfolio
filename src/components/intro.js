import React from 'react'

export default function intro() {
    return (
        <section className="intro">
            <div className="container">
                <h1>
                    <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Rachna.", "I am Creative.", "I Love to Design.", "I Love to Develop." ]'>
                        <span class="wrap"></span>
                    </a>
                </h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Designer</li>
                        <li class="breadcrumb-item">Developer</li>
                        <li class="breadcrumb-item ">Freelancer</li>
                    </ol>
                </nav>
                <ul className="social-icon">
                    <li>
                        <a href="#facebook">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#facebook">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#facebook">
                            <i class="fa fa-google"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#facebook">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
