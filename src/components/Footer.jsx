import React from "react";
import './Footer.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="footer-content">

                    <div className="footer-main">

                        {/* BRAND SECTION */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src={logo} alt="JPO Global" />
                            </div>

                            <p className="brand-description">
                                JPO Global provides expert Accounting, Taxation, Audit Support,
                                Financial Planning, and Advisory services—helping businesses across
                                the UAE and India achieve compliance, accuracy, and sustainable growth.
                            </p>

                            <div className="social-icons">
                                <a href="#" className="social-link">
                                    {/* Facebook Icon */}
                                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 
                                        12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 
                                        2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 
                                        3.029-2.692h1.971v3z" />
                                    </svg>
                                </a>

                                <a href="https://www.instagram.com/jpo_global" className="social-link">
                                    {/* Instagram Icon */}
                                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 
                                        3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 
                                        1.645.069 4.849 0 3.205-.012 3.584-.069 
                                        4.849-.149 3.225-1.664 4.771-4.919 
                                        4.919-1.266.058-1.644.07-4.85.07-3.204 
                                        0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 
                                        0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 
                                        4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                                    </svg>
                                </a>

                                <a href="https://wa.me/971562511837" className="social-link">
                                    {/* WhatsApp Icon */}
                                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 
                                        1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 
                                        0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 
                                        1.462 1.065 2.875 1.213 3.074.149.198 2.096 
                                        3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 
                                        1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* FOOTER COLUMNS */}
                        <div className="footer-columns">

                            {/* CONTACT SECTION */}
                            <div className="footer-column">
                                <h3 className="footer-heading">Contact Us</h3>
                                <ul className="contact-list">

                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 
                                            18c0 1.1.9 2 2 2h16c1.1 0 2-.9 
                                            2-2V6c0-1.1-.9-2-2-2z" />
                                        </svg>
                                        <div>
                                            <span className="contact-label">Email</span>
                                            <span className="contact-value">info@jpoglobal.com</span>
                                            <span className="contact-value">support@jpoglobal.com</span>
                                        </div>
                                    </li>

                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 
                                            1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.55"/>
                                        </svg>
                                        <div>
                                            <span className="contact-label">Phone</span>
                                            <span className="contact-value">+971 56 251 1837</span>
                                            <span className="contact-value">+91 97475 15517</span>
                                        </div>
                                    </li>

                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 
                                            9c0 5.25 7 13 7 13s7-7.75 
                                            7-13c0-3.87-3.13-7-7-7z" />
                                        </svg>
                                        <div>
                                            <span className="contact-label">Dubai Office</span>
                                            <span className="contact-value">Al Qusais Industrial Area 2</span>
                                            <span className="contact-value">Dubai, UAE</span>
                                        </div>
                                    </li>

                                    <li className="contact-item">
                                        <svg className="contact-icon" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 
                                            9c0 5.25 7 13 7 13s7-7.75 
                                            7-13c0-3.87-3.13-7-7-7z" />
                                        </svg>
                                        <div>
                                            <span className="contact-label">India Office</span>
                                            <span className="contact-value">Ernakulam, Kerala</span>
                                            <span className="contact-value">Maradu, KNA Plaza, 3rd Floor</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            {/* QUICK LINKS */}
                            <div className="footer-column">
                                <h3 className="footer-heading">Quick Links</h3>

                                <nav className="footer-nav">
                                    <Link to="/" className="nav-link">Home</Link>
                                    <Link to="/about-us" className="nav-link">About Us</Link>
                                    <Link to="/services" className="nav-link">Services</Link>
                                    <Link to="/contact-us" className="nav-link">Contact</Link>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="footer-bottom">
                        <p className="copyright">
                            © {new Date().getFullYear()} JPO Global. All rights reserved.
                        </p>
                    </div>

                </div>

                {/* DECORATIONS */}
                <div className="footer-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-dot"></div>
                    <div className="decoration-line"></div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
