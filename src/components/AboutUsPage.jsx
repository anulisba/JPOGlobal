import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./AboutUsPage.css";
import bgImg from '../assets/1u.png'
import Header from "./Header";
import Footer from "./Footer";
import WhyChooseUs from "./whychooseus";
const founders = [
    {
        name: "Reshma Antony",
        role: "Managing Director",
        image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1771655773/WhatsApp_Image_2026-02-07_at_8.53.33_PM_l7o86t.jpg", // replace with your path
        description:
            "Reshma Antony is a business and financial advisory leader with multi-entity experience across consulting, taxation, compliance, and investment services. She focuses on governance-driven structuring and sustainable business growth for startups, SMEs, and enterprises."
    },
    {
        name: "CA. Jismon Jose FCA",
        role: "Chief Consultant",
        image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1771655773/WhatsApp_Image_2026-02-07_at_8.50.56_PM_dqzpif.jpg", // replace with your path
        description:
            "A Chartered Accountant with over 13 years of experience, CA. Jismon Jose specializes in taxation and corporate advisory. He has led complex assignments in direct and indirect taxation, compliance strategy, and regulatory consulting across multiple industries."
    }
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
                <section id="about-us" className="aboutus-page-section">
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
                                JPO Global Business Solutions Pvt. Ltd. is a professionally incorporated company in India providing end-to-end accounting, compliance, outsourcing, and business advisory services to clients across India and international markets.
                                <br></br>
                                With a strong foundation built by experienced accounting and financial professionals, JPO Global has established itself as a reliable partner for businesses seeking accurate, timely, and cost-effective professional support.
                                <br></br>
                                We operate with a highly skilled expert team based in India along with our operational presence in the UAE, enabling us to serve both domestic and international clients efficiently. Our cross-border expertise helps businesses manage accounting, taxation, compliance, and reporting requirements seamlessly across jurisdictions.
                                <br></br>
                                For more than a decade, our outsourcing and professional support services have been delivering consistent value to clients by improving efficiency, reducing operational costs, and ensuring full regulatory compliance. We support startups, SMEs, and established organizations by acting as an extended professional arm of their business.
                                <br></br>
                                integrity, confidentiality, and timely service delivery. Our commitment is to provide practical and result-oriented solutions that help businesses focus on growth while we take care of compliance and financial management.

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
                {/* <section className="mission-vision-modern">
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
                </section> */}

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
                    <div className="f-container">
                        <div className="founders-header">
                            <p className="founder-subtitle">Leadership</p>
                            <h2 className="founder-heading">
                                Meet Our Leadership Team
                            </h2>
                        </div>

                        <div className="founders-wrapper">
                            {founders.map((founder, index) => (
                                <div
                                    className={`founder-card ${index % 2 !== 0 ? "reverse" : ""
                                        }`}
                                    key={index}
                                >
                                    <div className="founder-image">
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                        />
                                    </div>

                                    <div className="founder-content">
                                        <h3>{founder.name}</h3>
                                        <p className="founder-role">
                                            {founder.role}
                                        </p>
                                        <p className="founder-description">
                                            {founder.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
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