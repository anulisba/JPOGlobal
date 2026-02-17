// src/components/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingPage.css';
import Header from './Header';
import bg1 from '../assets/bg.jpg';
import bg2 from '../assets/bg1.jpg';
import bg3 from '../assets/bg2.png';
import AboutUs from './AboutUs';
import OurServices from './Services';
import ReportCounter from './ReportCounter';
import ProjectSection from './ProjectSection';
import OurWorkFlow from './OurServices';
import CustomerReviews from './CustomerReviews';
import Footer from './Footer';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import ContactLandingSection from './ContactLanding';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
// import lbg from '../assets/lbg.png'; // No longer needed
import Plans from './Plans';

const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2200); // Splash duration

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="jpo-splash-container">
            {/* LOGO */}
            <motion.img
                src={logo}
                alt="JPO Global"
                className="jpo-splash-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            />

            {/* BRAND NAME */}
            <motion.h1
                className="jpo-splash-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
            >
                JPO GLOBAL
            </motion.h1>

            {/* TAGLINE */}
            <motion.p
                className="jpo-splash-tagline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
            >
                Accounting • Taxation • Audit • Advisory
            </motion.p>
        </div>
    );
};

const ContactPopup = ({ onClose, onSelectLocation }) => {
    return (
        <motion.div
            className="contact-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="contact-popup-box"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
            >
                <button className="contact-popup-close-btn" onClick={onClose}>✕</button>

                <h2>Choose Your Location</h2>
                <p>Select the region you want to explore.</p>

                <motion.div
                    className="location-select-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        className="location-btn india"
                        onClick={() => onSelectLocation("India")}
                    >
                        🇮🇳 India
                    </button>

                    <button
                        className="location-btn dubai"
                        onClick={() => onSelectLocation("Dubai")}
                    >
                        🇦🇪 Dubai
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const LandingPage = () => {
    const [showSplash, setShowSplash] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    // Slide data: background images and text
    const slides = [
        {
            welcome: 'Welcome To <span>JPO GLOBAL</span>',
            title: 'We Specialize in Accounting<br />and Financial',
            desc: 'JPO Global provides end-to-end financial solutions including accounting, bookkeeping, VAT & corporate tax compliance, audit support, and strategic financial advisory — helping businesses across the UAE achieve accuracy, compliance, and sustainable growth.',
            bgImage: bg1,
        },
        {
            welcome: 'Expertise You <span>Can Trust</span>',
            title: 'Tax & Audit Services<br />for Your Business',
            desc: 'Our team of certified professionals ensures that your business remains compliant with the latest regulations while optimizing your financial performance.',
            bgImage: bg2,
        },
        {
            welcome: 'Global Reach, <span>Local Expertise</span>',
            title: 'Strategic Advisory<br />for Sustainable Growth',
            desc: 'From startups to established enterprises, we provide tailored financial strategies that drive success in today\'s competitive market.',
            bgImage: bg3,
        },
    ];

    const contactus = () => {
        navigate('/contact-us');
    };

    useEffect(() => {
        const hasSeenSplash = localStorage.getItem('hasSeenSplash');
        if (!hasSeenSplash) {
            setShowSplash(true);
        } else {
            setShowSplash(false);
        }
    }, []);

    useEffect(() => {
        if (!showSplash) {
            setShowContent(true);

            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
            }, 3000); // 3 seconds per slide

            return () => clearInterval(interval);
        }
    }, [showSplash, slides.length]);

    useEffect(() => {
        if (showContent) {
            const popupShown = localStorage.getItem('popupShown');
            if (!popupShown) {
                const popupTimer = setTimeout(() => {
                    setShowPopup(true);
                    localStorage.setItem('popupShown', 'true');
                }, 7000);

                return () => clearTimeout(popupTimer);
            }
        }
    }, [showContent]);

    useEffect(() => {
        const clearOnExit = () => {
            localStorage.removeItem('hasSeenSplash');
            localStorage.removeItem('popupShown');
        };

        window.addEventListener('beforeunload', clearOnExit);
        return () => {
            window.removeEventListener('beforeunload', clearOnExit);
        };
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
        localStorage.setItem('hasSeenSplash', 'true');
    };

    return (
        <div className="app-container">
            <AnimatePresence mode="wait">
                {showSplash ? (
                    <SplashScreen onComplete={handleSplashComplete} />
                ) : (
                    <motion.div
                        className="landing-page-container"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100vh" }}
                        transition={{ duration: 3, ease: [0.10, 1, 0.36, 1] }}
                    >
                        {showContent && (
                            <>
                                <Header />

                                {/* LANDING SECTION WITH BACKGROUND SLIDER */}
                                <section className="landing-section">
                                    <div className="slider-wrapper">
                                        <AnimatePresence>
                                            <motion.div
                                                key={currentIndex}
                                                className="slide"
                                                initial={{ x: '100%' }}
                                                animate={{ x: 0 }}
                                                exit={{ x: '-100%' }}
                                                transition={{ duration: 1, ease: 'easeInOut' }}
                                                style={{
                                                    backgroundImage: `url(${slides[currentIndex].bgImage})`,
                                                }}
                                            >
                                                <div className='slide-overlay'>
                                                    <div className="slide-content">
                                                        <h4
                                                            className="welcome"
                                                            dangerouslySetInnerHTML={{ __html: slides[currentIndex].welcome }}
                                                        />
                                                        <h1
                                                            className="landing-title"
                                                            dangerouslySetInnerHTML={{ __html: slides[currentIndex].title }}
                                                        />
                                                        <p className="landing-desc">{slides[currentIndex].desc}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </section>
                                {/* FINANCE SCROLLER SECTION */}
                                <section className="finance-scroller">
                                    <div className="scroller-wrapper">
                                        <div className="scroller-content">
                                            <span>
                                                • Accounting & Bookkeeping • Taxation Services (VAT & Corporate Tax) •
                                                Audit & Assurance • Financial Planning & Analysis (FP&A) •
                                                CFO & Strategic Financial Advisory • Payroll Management •
                                                Business Setup & Compliance (Mainland & Free Zone) •
                                            </span>

                                            <span>
                                                • Accounting & Bookkeeping • Taxation Services (VAT & Corporate Tax) •
                                                Audit & Assurance • Financial Planning & Analysis (FP&A) •
                                                CFO & Strategic Financial Advisory • Payroll Management •
                                                Business Setup & Compliance (Mainland & Free Zone) •
                                            </span>
                                        </div>
                                    </div>
                                </section>


                                <section id='about-us'>
                                    <AboutUs />
                                </section>
                                {/* <ReportCounter /> */}
                                <OurServices />

                                {/* <section id='projects'>
                                    <Plans />
                                </section> */}
                                {/* <section id='workflow'>
                                    <OurWorkFlow />
                                </section>
                                <section id='reviews'>
                                    <CustomerReviews />
                                </section> */}
                                <section id='contact'>
                                    <ContactLandingSection />
                                </section>
                                <section id='footer'>
                                    <Footer />
                                </section>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showPopup && (
                    <ContactPopup onClose={() => setShowPopup(false)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;