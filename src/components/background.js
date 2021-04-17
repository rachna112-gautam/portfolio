import React from 'react'

export default function background() {
    return (
        <section>
            <h2 className="section-title">Background</h2>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Latest News</h4>
                        <ul class="timeline">
                            <li>
                                <span>Graduation</span>
                                <p>Ajay Kumar Garg Engineering College</p>
                                <div className="date">Aug 2017 - Aug 2021</div>
                            </li>
                            <li>
                                <span>Intermediate</span>
                                <p>C.S.H.P PUBLIC SCHOOL</p>
                                <div className="date">Mar 2016 - Mar 2017</div>
                            </li>
                            <li>
                                <span>High School</span>
                                <p>C.S.H.P PUBLIC SCHOOL</p>
                                <div className="date">Mar 2014 - Mar 2015</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
