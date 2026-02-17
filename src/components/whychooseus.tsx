import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './whyChooseUs.css';

const WhyChooseUs = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const benefits = [
        {
            number: "01",
            title: "Cost-Effective Accounting",
            description: "Reduce operational costs while receiving high-quality accounting and bookkeeping services from experienced professionals.",
            highlight: "Optimized Business Costs"
        },
        {
            number: "02",
            title: "Specialized Financial Expertise",
            description: "Gain support from qualified accounting professionals with deep knowledge of Dubai regulations and global standards.",
            highlight: "Professional Expertise"
        },
        {
            number: "03",
            title: "Modern Accounting Technology",
            description: "Utilize advanced cloud-based systems and automation tools for accurate and real-time financial reporting.",
            highlight: "Smart Financial Systems"
        },
        {
            number: "04",
            title: "Complete Accounting Support",
            description: "Receive end-to-end services covering bookkeeping, VAT filing, compliance, and financial reporting needs.",
            highlight: "All-in-One Solutions"
        },
        {
            number: "05",
            title: "Secure Financial Management",
            description: "Ensure your financial information remains protected through strict confidentiality standards and secure systems.",
            highlight: "Secure & Reliable"
        }
    ];



    // Parent container animation (stagger)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Card animation
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
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

                    <motion.div
                        className="benefits-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >

                        {/* Heading */}
                        <motion.div
                            className="grid-heading"
                            variants={cardVariants}
                        >
                            <p className="service-sub">WHY OUTSOURCE?</p>

                            <h2 className="service-title">
                                Smarter Accounting Solutions
                            </h2>

                            <p className="why-sub-description">
                                Outsourcing your accounting and bookkeeping allows your business to reduce costs,
                                improve operational efficiency, and gain access to expert financial guidance.
                                With JPO Global, you receive reliable, compliant, and technology-driven support
                                designed to help your business grow with confidence.
                            </p>
                        </motion.div>


                        {/* Benefit Cards */}
                        {benefits.map((benefit) => (
                            <motion.div
                                key={benefit.number}
                                className="benefit-card"
                                variants={cardVariants}
                            >
                                <div className="benefit-number-wrapper">
                                    <span className="benefit-number">
                                        {benefit.number}
                                    </span>
                                    <div className="number-line"></div>
                                </div>

                                <div className="benefit-content">
                                    <h3 className="benefit-title">
                                        {benefit.title}
                                    </h3>
                                    <span className="benefit-highlight">
                                        {benefit.highlight}
                                    </span>
                                    <p className="benefit-description">
                                        {benefit.description}
                                    </p>
                                </div>

                                <div className="benefit-hover-indicator"></div>
                            </motion.div>
                        ))}

                    </motion.div>

                </section>
            </div>
        </div>
    );
};

export default WhyChooseUs;
