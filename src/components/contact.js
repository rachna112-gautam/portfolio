import React from 'react'

export default function contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h4>Contact info</h4>
                        <ul className="contact-list">
                            <li>
                                <span className="icon"><i class="fa fa-map-marker"></i></span>
                                <span className="icon-info">Ghaziabad, Uttar Pradesh</span>
                            </li>
                            <li>
                                <span className="icon"><i class="fa fa-envelope"></i></span>
                                <span className="icon-info">example@gmail.com</span>
                            </li>
                            <li>
                                <span className="icon"><i class="fa fa-phone"></i></span>
                                <span className="icon-info">+91XXXXXXXXX</span>
                            </li>
                        </ul>
                        <div className="follow-list">
                            <h5>Follow Me</h5>
                            <ul>
                                <li >
                                    <a href="#facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#facebook">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#facebook">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#facebook">
                                        <i className="fa fa-google"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form>
                            <div class="form-group">
                                <label for="Name">Name</label>
                                <input type="text" class="form-control" id="Name" placeholder="Type your name" />
                            </div>
                            <div class="form-row row mb-4 mt-4">
                                <div class="form-group col-sm-6 col-md-6">
                                    <label for="phone">Phone Number</label>
                                    <input type="mobile" class="form-control" id="phone" placeholder="Type your phone number" />
                                </div>
                                <div class="form-group col-sm-6 col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Type your email" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="msg">Address</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Type your message"></textarea>
                            </div>
                            <button type="button" className="btn cv">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
