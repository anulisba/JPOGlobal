import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./AboutUsPage.css";
import bgImg from '../assets/1u.png'
import Header from "./Header";
import Footer from "./Footer";
import WhyChooseUs from "./whychooseus";
const founders = [
    {
        name: "Sarah Johnson",
        role: "Co-Founder & CEO",
        image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1765012683/portrait-businessman-smiling_razw3t.jpg",
    },
    {
        name: "Michael Chen",
        role: "Co-Founder & COO",
        image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1765012655/inspiring-new-boss_awi7e2.jpg",
    },
    {
        name: "Emily Rodriguez",
        role: "Co-Founder & CTO",
        image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1765012655/young-male-entrepreneur-making-eye-contact-against-blue-background_vky8zo.jpg",
    },
];

const AboutUsPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const handleNext = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % founders.length);
    }, [founders.length]);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + founders.length) % founders.length);
    };

    // Auto-slide every 3 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [handleNext, isAutoPlaying]);

    // Pause auto-slide on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);
    return (
        <>
            <Header />
            <div className="aboutus-page-container">

                {/* Hero Section with Geometric Background */}
                <section className="aboutus-page-hero">
                    <div className="hero-content-abt">
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aboutus-page-hero-h1"
                        >
                            About JPO Global
                        </motion.h1>
                        <motion.p className="since-text-abt"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            We are a team of innovators, designers, and problem-solvers
                            dedicated to creating exceptional digital experiences that
                            drive meaningful results for our clients.
                        </motion.p>

                    </div>
                </section>

                {/* Introduction with Diagonal Split Layout */}
                <section id="about-us" className="about-us-section">
                    <motion.div
                        className="about-us-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-text-content">
                            <span className="about-subtitle">Our Story</span>
                            <h2 className="about-heading">Excellence You Can Trust</h2>
                            <div className="service-name-line"></div>
                            <p className="about-description">
                                JPO Global is a UAE-based financial services firm specializing in
                                Accounting, Bookkeeping, Taxation, Audit Support, Financial Planning,
                                and Strategic Advisory. With a team of qualified professionals and
                                deep expertise in UAE regulations, we deliver accurate, compliant, and
                                technology-driven financial solutions tailored to businesses of all sizes.
                                <br /><br />
                                Our mission is to empower organizations with transparent financial insights,
                                effective tax planning, reliable compliance, and data-driven decision-making.
                                By combining industry experience with modern cloud-based tools, we ensure
                                efficiency, integrity, and long-term value for every client.
                                <br /><br />
                                At JPO Global, we believe in building relationships that go beyond routine
                                accounting support. We work closely with entrepreneurs, SMEs, and established
                                enterprises to understand their operational challenges and financial goals.
                                Our proactive approach, detailed reporting, and personalized advisory services
                                enable clients to improve profitability, strengthen internal controls, and
                                make confident strategic decisions in a rapidly evolving business environment.
                            </p>



                        </div>
                        {/* Left Image Section */}
                        <div className="image-content">
                            <div className="main-image">
                                <img
                                    src="https://res.cloudinary.com/dpo91btlc/image/upload/v1757845573/Excellence_Since_2016_n4knjt.png"
                                    alt="Excellence"
                                />

                            </div>
                        </div>

                        {/* Right Text Section */}

                    </motion.div>
                </section>

                {/* Mission & Vision with Card Layout */}
                <section className="mission-vision-modern">
                    <div className="container">


                        <div className="mv-container">
                            <motion.div
                                className="mv-card mission-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="mv-card-header">

                                    <h3 className="about-heading">Our Mission</h3>
                                </div>
                                <p>
                                    To empower businesses and individuals through cutting-edge solutions,
                                    fostering growth, efficiency, and sustainability. We strive to deliver
                                    exceptional project management, transparency, and accountability while
                                    valuing the dedication of our employees.
                                </p>
                                <div className="mv-card-highlight"></div>
                            </motion.div>

                            <div className="mv-center-divider">
                                <div className="mv-divider-line"></div>
                                <div className="mv-divider-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <motion.div
                                className="mv-card vision-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="mv-card-header">

                                    <h3 className="about-heading">Our Vision</h3>
                                </div>
                                <p>
                                    To maintain and strengthen the quality we provide to our customers. With
                                    years of experience on major projects and a strong client base, we are
                                    committed to engineering and construction excellence driven by teamwork
                                    and shared values.
                                </p>
                                <div className="card-highlight"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Clients Section with Logo Grid */}
                {/* <motion.section
                className="clients-section-grid"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="clients-content">
                    <h2 className="about-heading">Our Esteemed Clients</h2>
                    <div className="divider-line"></div>
                    <p>
                        We are privileged to work with some of the most prestigious names in the
                        hospitality and real estate sector including Hilton, Waldorf Astoria, Landmark
                        Group, Marriott, Aldar Hospitality, and many more across the UAE.
                    </p>
                </div>
                <div className="clients-logos-grid">
      
                    {[
                        { src: client1, alt: "Client 1" },
                        { src: client2, alt: "Client 2" },
                        { src: client3, alt: "Client 3" },
                        { src: client4, alt: "Client 4" },
                        { src: client5, alt: "Client 5" },
                        { src: client6, alt: "Client 6" },
                        { src: client7, alt: "Client 7" },
                        { src: client8, alt: "Client 8" },
                        { src: client10, alt: "Client 10" },
                        { src: client11, alt: "Client 11" },
                        { src: client12, alt: "Client 12" },
                        { src: client13, alt: "Client 13" },
                        { src: client14, alt: "Client 14" },
                        { src: client15, alt: "Client 15" },
                        { src: client16, alt: "Client 16" },
                        { src: client17, alt: "Client 17" },
                    ].map((client, index) => (
                        <div key={index} className="client-logo-grid">
                            <img
                                key={index} src={client.src} alt={client.alt}
                            />
                        </div>
                    ))}
                </div>
            </motion.section> */}

                {/* Why Choose Mount Diva Section */}
                <WhyChooseUs />


                {/* Our Commitment Section */}
                {/* <motion.section
                className="our-commitment-vsteps"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="about-heading">Our Commitment</h2>
                <div className="divider-line"></div>
                <div className="vsteps-container">
                    <div className="step">
                        <div className="step-number">01</div>
                        <div className="step-content">
                            <h4>Quality Excellence</h4>
                            <p>Uncompromising commitment to quality in all our services</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">02</div>
                        <div className="step-content">
                            <h4>Timely Delivery</h4>
                            <p>Completing projects within agreed timelines</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">03</div>
                        <div className="step-content">
                            <h4>Customer Satisfaction</h4>
                            <p>Ensuring complete customer satisfaction</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">04</div>
                        <div className="step-content">
                            <h4>Innovation</h4>
                            <p>Continuous improvement and innovation</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">05</div>
                        <div className="step-content">
                            <h4>Sustainability</h4>
                            <p>Environmentally responsible practices</p>
                        </div>
                    </div>
                </div>
            </motion.section> */}

                {/* Core Values with Modern Card Layout */}
                <section className="founders-section">
                    <div className="container">
                        <div className="section-header">
                            <p className="founder-subtitle">
                                Leadership Team

                            </p>
                            <h2 className="founder-heading">Meet the visionaries behind our success</h2>


                        </div>

                        <div className="founders-container">
                            <div
                                className="founders-slider"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {founders.map((founder, index) => (
                                    <div
                                        className={`founder-slide ${index === currentSlide ? 'active' : ''} 
                         ${index === (currentSlide + 1) % founders.length ? 'next' : ''}
                         ${index === (currentSlide - 1 + founders.length) % founders.length ? 'prev' : ''}`}
                                        key={index}
                                    >
                                        <div className="founder-card">
                                            <div className="founder-image">
                                                <img src={founder.image} alt={founder.name} />
                                            </div>
                                            <div className="founder-info">
                                                <h4>{founder.name}</h4>
                                                <p className="founder-role">{founder.role}</p>
                                                <p className="founder-bio">{founder.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="slider-controls">
                                <button
                                    className="slider-arrow prev-arrow"
                                    onClick={handlePrev}
                                    aria-label="Previous founder"
                                >
                                    ←
                                </button>
                                <div className="slider-dots">
                                    {founders.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                                            onClick={() => setCurrentSlide(index)}
                                        />
                                    ))}
                                </div>
                                <button
                                    className="slider-arrow next-arrow"
                                    onClick={handleNext}
                                    aria-label="Next founder"
                                >
                                    →
                                </button>
                            </div>

                            {/* Optional auto-slide indicator */}
                            {/* <div className="auto-slide-indicator">
                                <span>Auto-slide: </span>
                                <button onClick={() => setIsAutoPlaying(!isAutoPlaying)}>
                                    {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
                                </button>
                            </div> */}
                        </div>
                    </div>
                </section>
                <div style={{ marginBottom: "20px" }}></div>
                <Footer />
            </div>
        </>
    );
};

export default AboutUsPage;