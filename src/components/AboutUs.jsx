import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();

    const handleAboutUs = () => {
        navigate('/about-us');
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="about-us" className="about-us-section">
            <div className="about-us-container">

                {/* Left Image Section */}
                <motion.div
                    className="image-content"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="main-image">
                        <img
                            src="https://res.cloudinary.com/dpo91btlc/image/upload/v1765010413/unrecognizable-business-partners-working-with-statistic-charts-businessman-holding-tablet-professional-content-businesswoman-making-notes-statistics-communication-partnership-concept_1_uk30pr.jpg"
                            alt="Excellence"
                        />
                    </div>
                </motion.div>

                {/* Right Text Section */}
                <motion.div
                    className="about-text-content"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <span className="about-subtitle">About Us</span>
                    <h2 className="about-heading">
                        Your Trusted Partner in Financial Excellence
                    </h2>
                    <div className="service-name-line"></div>

                    <p className="about-description">
                        JPO Global Business Solutions Pvt. Ltd. provides end-to-end accounting,
                        taxation, compliance, and advisory services across India and the UAE.
                        With over a decade of expertise, we support startups, SMEs, and growing
                        businesses with reliable, cost-effective, and cross-border financial
                        solutions. We act as your trusted financial partner, ensuring accuracy,
                        compliance, and sustainable business growth.
                    </p>

                    <div className="about-btn-container">
                        <button className="about-btn" onClick={handleAboutUs}>
                            Know More
                        </button>
                        <span className="blue-circle"></span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutUs;
