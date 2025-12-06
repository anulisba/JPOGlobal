import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    const handleAboutUs = () => {
        navigate('/about-us');
    }
    return (
        <section id="about-us" className="about-us-section">
            <motion.div
                className="about-us-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {/* Left Image Section */}
                <div className="image-content">
                    <div className="main-image">
                        <img
                            src="https://res.cloudinary.com/dpo91btlc/image/upload/v1765010413/unrecognizable-business-partners-working-with-statistic-charts-businessman-holding-tablet-professional-content-businesswoman-making-notes-statistics-communication-partnership-concept_1_uk30pr.jpg"
                            alt="Excellence"
                        />

                    </div>
                </div>

                {/* Right Text Section */}
                <div className="about-text-content">
                    <span className="about-subtitle">About Us</span>
                    <h2 className="about-heading">Your Trusted Partner in Financial Excellence</h2>
                    <div className="service-name-line"></div>

                    <p className="about-description">
                        JPO Global is a UAE-based financial services firm specializing in
                        Accounting, Bookkeeping, Taxation, Audit Support, Financial Planning,
                        and Strategic Advisory. With a team of qualified professionals and
                        deep expertise in UAE regulations, we deliver accurate, compliant, and
                        technology-driven financial solutions tailored to businesses of all sizes.
                        <br /><br />
                        {/* Our mission is to empower organizations with transparent financial insights,
                        effective tax planning, reliable compliance, and data-driven decision-making.
                        By combining industry experience with modern cloud-based tools, we ensure
                        efficiency, integrity, and long-term value for every client. */}
                    </p>

                    <div className="about-btn-container">
                        <button className="about-btn" onClick={handleAboutUs}>Know More</button>
                        <span className="blue-circle"></span>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default AboutUs;
