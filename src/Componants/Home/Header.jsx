
import React from 'react';
import { NavDropdown } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiPhoneCall } from 'react-icons/fi';
import { IoCall, IoLocationOutline, IoMailOutline, IoTimeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <header className='header-main'>
                <Navbar expand="lg" className="bg-body-tertiary">

                    <Container>
                        <Navbar.Brand href="#home">
                            <div className="logo-img">
                                <img src="assets/img/logo.5f815319.svg" alt="" />
                            </div>

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <div className="logo-media">
                                    <img src="assets/img/logo.5f815319.svg" alt="" />
                                </div>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                                <NavDropdown title="Program" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Programs Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"> Programs Carousel </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Programs Details</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Event</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"> Teacher </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Pricing</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Faq's</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">404 page</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Blog" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Blog Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Blog List</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"> Blog Carousel </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Blog Details</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">Contact</Nav.Link>

                            </Nav>

                            <div className="contact-info">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className='d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <IoLocationOutline />
                                        </div>
                                        <div className="contact-text">
                                            <Link>Main Street, Melbourne, Australia</Link>
                                        </div>

                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <IoMailOutline />
                                        </div>
                                        <div className="contact-text">
                                            <Link>info@example.com</Link>
                                        </div>

                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <IoTimeOutline />
                                        </div>
                                        <div className="contact-text">
                                            <Link>Mod-friday, 09am -05pm</Link>
                                        </div>

                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <FiPhoneCall />
                                        </div>
                                        <div className="contact-text">
                                            <Link>+11002345909</Link>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </Navbar.Collapse>

                        <div className="header-right d-flex justify-content-end align-items-center">
                            <div className="author-icon">
                                <div className="icon">
                                    <IoCall />
                                </div>
                                <div className="content">
                                    <span>Call Us Now</span>
                                    <h5><a href="tel:+2085550112">+208-555-0112</a></h5>
                                </div>
                                </div>
                                <div className="header-btn">
                                    <Link className='theme-btn hover-white'> Book a Visit
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </Link>
                                </div>

                            
                        </div>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}


export default Header