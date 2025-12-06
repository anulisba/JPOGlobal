import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './whyChooseUs.css';

const WhyChooseUs = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const benefits = [
        {
            number: "01",
            title: "Qualified Financial Experts",
            description: "A team of certified accountants, tax specialists, and financial advisors with deep knowledge of UAE regulations.",
            highlight: "Professional Expertise"
        },
        {
            number: "02",
            title: "Compliance With UAE Laws",
            description: "End-to-end support for VAT, corporate tax, audit requirements, and financial reporting aligned with IFRS standards.",
            highlight: "Regulatory Accuracy"
        },
        {
            number: "03",
            title: "Data-Driven Insights",
            description: "Advanced financial analysis, forecasting, KPI tracking, and monthly MIS reporting to support informed decision-making.",
            highlight: "Strategic Intelligence"
        },
        {
            number: "04",
            title: "Personalized Advisory",
            description: "Tailored accounting, tax, and CFO-level guidance designed to meet the specific needs of SMEs, startups, and enterprises.",
            highlight: "Customized Solutions"
        },
        {
            number: "05",
            title: "Reliability & Transparency",
            description: "Consistent, timely, and transparent service delivery built on trust, confidentiality, and long-term client partnerships.",
            highlight: "Trusted Partnership"
        }
    ];


    const cardAnimate = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } }
    };

    return (
        <div className="why-choose-container" ref={containerRef}>
            <div
                className="why-choose-background"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)), url('https://res.cloudinary.com/dpo91btlc/image/upload/v1758446708/Untitled_design_12_y2nfi3.png')"
                }}
            >
                <section className="why-choose-contents">
                    {/* Main Grid Container */}
                    <div className="benefits-grid">
                        {/* Heading and Subheading */}
                        <motion.div
                            className="grid-heading"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={cardAnimate}
                        >
                            <p className="service-sub">WHY JPO GLOBAL</p>
                            <h2 className="service-title">
                                Excellence in every detail, commitment in every service
                            </h2>
                        </motion.div>

                        {/* All Benefit Cards */}
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.number}
                                className="benefit-card"
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardAnimate}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className="benefit-number-wrapper">
                                    <span className="benefit-number">{benefit.number}</span>
                                    <div className="number-line"></div>
                                </div>

                                <div className="benefit-content">
                                    <h3 className="benefit-title">{benefit.title}</h3>
                                    <span className="benefit-highlight">{benefit.highlight}</span>
                                    <p className="benefit-description">{benefit.description}</p>
                                </div>
                                <div className="benefit-hover-indicator"></div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhyChooseUs;