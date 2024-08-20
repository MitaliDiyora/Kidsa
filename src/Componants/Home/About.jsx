import React from 'react'
import { IoCall } from 'react-icons/io5'

const About = () => {
    return (
        <>
            <div className="about-main fix section-padding">
                <div className="left-shape">
                    <img src="assets/img/plane.webp" alt="" width={270} height={350}/>
                </div>
                <div className="left-two-shape">
                    <img src="assets/img/pencil.webp" alt="" width={270} height={350}/>
                </div>
                <div className="frame-shape">
                <img alt="shape-img"   src="assets/img/girl.webp"/>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="border-shape">
                                    <img src="assets/img/border-shape.webp" alt="" />
                                </div>
                                <div className="thumb">
                                    <img src="assets/img/05.webp" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span>About Us</span>
                                    <h2>Welcome to best Kidsa for your child</h2>

                                </div>
                                <p >Luctus. Curabitur nibh justo imperdiet non ex non tempus faucibus urna Aliquam at elit vitae dui sagittis maximus eget vitae diam In fermentum</p>
                                <div className="row g-4 mt-4">
                                    <div className="col-xl-6 col-lg-8 col-md-6">
                                        <div className="icon-items">
                                            <div className="icon">
                                                <img src="assets/img/icon-7.26015355.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Our Mission</h5>
                                                <p>Aliquam erat volutpat <br /> nullam imperdiet</p>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xl-6 col-lg-8 col-md-6">
                                        <div className="icon-items">
                                            <div className="icon">
                                                <img src="assets/img/icon-8.0ec972ed.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Our Mission</h5>
                                                <p>Aliquam erat volutpat <br /> nullam imperdiet</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="about-author">
                                    <div className="author-image">
                                        <img src="assets/img/author.webp" alt="" />
                                        <div className="content">
                                            <h6>Ronald Richards</h6>
                                            <p>Co, Founder</p>
                                        </div>
                                    </div>
                             
                                <div className="author-icon">
                                <div className="icon">
                                    <IoCall />
                                </div>
                                <div className="content">
                                    <span>Call Us Now</span>
                                    <h5><a href="tel:+2085550112">+208-555-0112</a></h5>
                                </div>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default About