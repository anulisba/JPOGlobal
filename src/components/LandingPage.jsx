// src/components/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingPage.css';
import Header from './Header';
import bg1 from '../assets/bg.jpg'
import bg2 from '../assets/bg1.jpg'
import bg3 from '../assets/bg2.jpg'
import AboutUs from './AboutUs';
import OurServices from './Services';
import ReportCounter from './ReportCounter';
import ProjectSection from './ProjectSection';
import OurWorkFlow from './OurServices';
import CustomerReviews from './CustomerReviews';
import Footer from './Footer';
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import ContactLandingSection from './ContactLanding';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import lbg from '../assets/lbg.png';
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
    const images = [bg1, bg2, bg3];
    const navigate = useNavigate();

    const contactus = () => {
        navigate('/contact-us')
    }

    useEffect(() => {
        const hasSeenSplash = localStorage.getItem('hasSeenSplash');
        if (!hasSeenSplash) {
            setShowSplash(true);
        } else {
            setShowSplash(false);
            // Don't set showContent here - will be handled by the next useEffect
        }
    }, []);

    useEffect(() => {
        if (!showSplash) {
            // Set showContent to true only when splash screen is hidden
            setShowContent(true);

            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [showSplash]);

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
        localStorage.setItem('hasSeenSplash', 'true'); // important fix
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
                                <section className="landing-section">

                                    <div className="landing-left animate-fade-up">
                                        <h4 className="welcome">
                                            Welcome To <span>JPO GLOBAL</span>
                                        </h4>

                                        <h1 className="landing-title">
                                            We Specialize in Accounting<br /> and Financial
                                        </h1>

                                        <p className="landing-desc">
                                            JPO Global provides end-to-end financial solutions including
                                            accounting, bookkeeping, VAT & corporate tax compliance, audit
                                            support, and strategic financial advisory — helping businesses
                                            across the UAE achieve accuracy, compliance, and sustainable growth.
                                        </p>
                                    </div>

                                    <div className="landing-right animate-fade">
                                        <img src={lbg} alt="Landing Visual" className="landing-img" />
                                    </div>
                                </section>

                                <section id='about-us'>
                                    <AboutUs />
                                </section>
                                <OurServices />
                                <section id='projects'>
                                    <Plans />
                                </section>
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