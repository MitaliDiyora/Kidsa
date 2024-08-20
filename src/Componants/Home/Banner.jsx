import React from 'react'
import { IoPlay } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Banner = () => {


    return (
        <>
            <div className="hero-slider bg-image bg-cover">
 {/*<div className="bg-image bg-cover">
                    <img src="assets/img/slider-1.png" alt="" />
                </div>*/}
                <div className="parasuit-shape">
                    <img src="assets\img\parasuit.webp" alt="" />
                </div>
                <div className="doll-shape">
                    <img src="assets/img/doll.webp" alt="" />
                </div>
                <div className="bus-shape">
                    <img src="assets/img/bus.webp" alt="" />
                </div>
                <div className="bee-shape">
                    <img src="assets/img/bee-2.webp" alt="" />
                </div>
                <div className="star-shape">
                    <img src="assets/img/star-2.webp" alt="" />
                </div>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <h5>Welcome to Kidsa</h5>
                                <h1>Trial Nanny Free <br /> On <span>First Day.</span></h1>
                                <p>Suspendisse eget lectus vitae elit malesuada lacinia Vestibulum <br /> scelerisque, ligula sit amet consequat</p>

                                <div className="hero-button">
                                    <Link className='theme-btn hover-white'> Explore More
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </Link>
                                    <div className="play-text">
                                        <div className="video-btn ripple video-popup">
                                            <IoPlay />
                                        </div>
                                        <span class="ms-4 d-line">Play Video</span>
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

export default Banner