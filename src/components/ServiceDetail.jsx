import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ServiceDetail.css";
// import bgImg from '../assets/1u.png';
import Header from "./Header";
import Footer from "./Footer";
import { FaClipboardCheck, FaCogs, FaRegFileAlt } from "react-icons/fa";
import JpoOurWorkFlow from "./OurServices";

const ServiceDetail = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 0,
            name: "Accounting & Bookkeeping",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758969828/Untitled_design_16_pau0vh.png",
            description:
                "Comprehensive accounting and bookkeeping services ensuring accurate financial records, IFRS compliance, and real-time visibility into your business performance.",
            details: [
                "Daily bookkeeping and ledger maintenance",
                "Preparation of balance sheet, P&L, and cash flow statements",
                "Cloud-based accounting system setup",
                "Payroll processing and reconciliation",
                "Accounts receivable & payable management"
            ],
            workflow: [
                "Initial financial review and requirement understanding",
                "Record collection, classification, and entry",
                "Preparation of monthly/quarterly financial reports",
                "Reconciliation and compliance checks",
                "Ongoing financial monitoring and support"
            ]
        },
        {
            id: 1,
            name: "Taxation Services",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211588/Untitled_design_7_kdxdg3.png",
            description:
                "Expert VAT and Corporate Tax services designed to ensure UAE Federal Tax Authority (FTA) compliance, reduce liabilities, and optimize tax planning.",
            details: [
                "VAT registration, filing, and compliance",
                "Corporate Tax calculation and return filing",
                "Excise Tax advisory and reporting",
                "Tax planning and optimization strategies",
                "FTA audit assistance"
            ],
            workflow: [
                "Tax applicability assessment",
                "Document collection and validation",
                "VAT/Corporate Tax computation",
                "Filing and compliance submission",
                "Ongoing advisory and tax planning updates"
            ]
        },
        {
            id: 2,
            name: "Audit & Assurance",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211584/Untitled_design_6_mxnxvp.png",
            description:
                "Independent audit and assurance services that strengthen financial accuracy, internal controls, and compliance with UAE regulatory standards.",
            details: [
                "Internal and external audits",
                "Due diligence for mergers & acquisitions",
                "Internal control and risk assessments",
                "Regulatory compliance audits",
                "Verification of financial statements"
            ],
            workflow: [
                "Audit planning and objectives finalization",
                "Data and document collection",
                "Testing of controls and transaction review",
                "Audit findings and recommendation reporting",
                "Follow-up support for corrective actions"
            ]
        },
        {
            id: 3,
            name: "Financial Planning & Analysis (FP&A)",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211584/Untitled_design_5_lrkizr.png",
            description:
                "Advanced financial planning and analytical insights that help businesses make data-driven decisions and prepare for future growth.",
            details: [
                "Budgeting and forecasting models",
                "Monthly MIS reporting",
                "Performance and variance analysis",
                "KPI tracking and dashboarding",
                "Feasibility studies & business insights"
            ],
            workflow: [
                "Requirement gathering and data collection",
                "Financial model development",
                "Trend analysis and forecasting",
                "Report preparation and presentation",
                "Continuous monitoring and revision"
            ]
        },
        {
            id: 4,
            name: "CFO & Strategic Financial Advisory",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211245/Untitled_design_3_nlukvw.png",
            description:
                "High-level financial strategy and advisory services that help businesses improve profitability, strengthen financial structure, and scale sustainably.",
            details: [
                "Virtual CFO services",
                "Cash flow planning & liquidity management",
                "Investment & funding advisory",
                "Cost optimization strategies",
                "Business performance improvement plans"
            ],
            workflow: [
                "Understanding business goals and challenges",
                "Financial health assessment",
                "Strategy formulation and planning",
                "Execution support and monitoring",
                "Periodic reviews and performance updates"
            ]
        },
        {
            id: 5,
            name: "Payroll Management",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211246/Untitled_design_1_md5qqz.png",
            description:
                "Accurate, secure, and on-time payroll processing with complete compliance to UAE labor and tax regulations.",
            details: [
                "Monthly payroll processing",
                "WPS compliance and salary file generation",
                "Leave & attendance reconciliation",
                "Employee benefits and deductions management",
                "Monthly payroll reports & payslips"
            ],
            workflow: [
                "Employee data collection",
                "Attendance and payroll calculations",
                "Compliance checks (WPS, deductions, taxes)",
                "Salary disbursement processing",
                "Payslip and reporting"
            ]
        },
        {
            id: 6,
            name: "Business Setup & Compliance",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758211245/Untitled_design_4_xvcpez.png",
            description:
                "End-to-end support for company formation, licensing, and compliance in UAE mainland and free zones, ensuring a smooth business setup process.",
            details: [
                "Company incorporation in mainland & free zones",
                "Trade license application & renewal",
                "Corporate tax & VAT registration",
                "Bank account opening support",
                "Regulatory documentation and compliance setup"
            ],
            workflow: [
                "Understanding business structure and objectives",
                "Selecting jurisdiction and licensing type",
                "Documentation and application processing",
                "Regulatory registration and system setup",
                "Final approval, activation & compliance guidance"
            ]
        }
    ];

    const plans = [
        {
            name: "Basic Plan",
            icon: <FaRegFileAlt />,
            description: "Essential financial services for startups and small businesses.",
            price: "$299",
            features: [
                "Monthly Bookkeeping",
                "Basic Financial Reports",
                "Tax Return Preparation",
                "Quarterly Reviews"
            ]
        },
        {
            name: "Standard Plan",
            icon: <FaClipboardCheck />,
            description: "Comprehensive services for growing businesses.",
            price: "$599",
            features: [
                "All Basic Plan Features",
                "Financial Planning & Analysis",
                "Audit Preparation",
                "Monthly Consultations",
                "Advanced Reporting"
            ]
        },
        {
            name: "Customized Plan",
            icon: <FaCogs />,
            description: "Tailored solutions for enterprise-level requirements.",
            price: "Custom",
            features: [
                "All Standard Plan Features",
                "Dedicated Account Manager",
                "Strategic Financial Advisory",
                "Custom Reporting",
                "24/7 Priority Support"
            ]
        }
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-container">
            {/* Hero Section */}
            <Header />
            <section
                className="service-detail-hero"
                style={{ backgroundImage: `url("https://res.cloudinary.com/dpo91btlc/image/upload/v1765014472/Untitled_design_xj33sm.png")` }}
            >
                <div className="hero-overlay-service">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Services
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Expert financial, tax, audit, and advisory solutions tailored for UAE businesses
                    </motion.p>
                </div>

            </section>

            {/* Service Navigation */}
            <section className="service-navigation">
                <div className="container" style={{ justifyContent: "center" }}>
                    <h2 className="about-heading" style={{ textAlign: "center" }}>Explore Our Services</h2>
                    <div className="ine" style={{ textAlign: "center" }}></div>

                    <div className="service-tabs-mobile">
                        {services.map((service, index) => (
                            <div key={service.id} className="mobile-service-item">
                                <button
                                    className={`service-tab ${activeService === index ? 'active' : ''}`}

                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent browser scroll
                                        setActiveService(index);
                                    }}
                                >
                                    {service.name}
                                </button>

                                {activeService === index && (
                                    <div className="mobile-service-details">
                                        <div className="service-image-container">
                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="service-detail-image"
                                            />
                                        </div>
                                        <div className="service-text-content">
                                            <p className="service-description">{service.description}</p>
                                            <div className="service-features">
                                                <h3>Service Features</h3>
                                                <ul>
                                                    {service.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Version */}
                    <div className="service-tabs-desktop">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                type="button"
                                className={`service-tab ${activeService === index ? 'active' : ''}`}
                                onClick={() => setActiveService(index)}
                            >
                                {service.name}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* Desktop Service Details */}
            <section className="service-details-section desktop-only">
                <div className="container">
                    <div className="service-content">
                        <div className="service-image-container">
                            <img
                                src={services[activeService].image}
                                alt={services[activeService].name}
                                className="service-detail-image"
                            />
                        </div>
                        <div className="service-text-content">
                            <h2 className="about-heading">{services[activeService].name}</h2>
                            <div className="service-name-line"></div>
                            <p className="service-description">{services[activeService].description}</p>
                            <div className="service-features">
                                <h3>Service Features</h3>
                                <ul>
                                    {services[activeService].details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            {/* <section className="workflow-section">
                <div className="workflow-container">
                    <h2 className="workflow-heading">Our Workflow Process</h2>
                    <div className="workflow-line"></div>

                    <p className="workflow-intro">
                        We follow a structured and transparent approach to ensure high-quality service delivery for{" "}
                        <span className="workflow-service-name">{services[activeService].name}</span>.
                    </p>

                    <div className="workflow-steps">
                        {services[activeService].workflow.map((step, index) => (
                            <motion.div
                                key={index}
                                className="workflow-step"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="step-number">{index + 1}</div>

                                <div className="step-text-wrapper">
                                    <p className="step-text">{step}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
            <JpoOurWorkFlow />

            <section className="service-page-plans-section">
                <div className="service-page-plans-container">
                    <div className="service-page-plans-header">
                        <h4 className="service-page-plans-sub">Our Packages</h4>
                        <h1 className="service-page-plans-title">Choose Your Perfect Plan</h1>
                        <p className="service-page-plans-desc">
                            Flexible pricing plans designed to meet your business needs and budget requirements.
                        </p>
                    </div>

                    <div className="service-page-plans-grid">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="service-page-plan-card service-page-fade-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-page-plan-icon">
                                    {plan.icon}
                                </div>
                                <h3 className="service-page-plan-name">{plan.name}</h3>
                                <div className="service-page-plan-price">{plan.price}</div>
                                <p className="service-page-plan-desc">{plan.description}</p>

                                <ul className="service-page-plan-features">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="service-page-plan-feature">
                                            ✓ {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="service-page-plan-btn">
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Why Choose Us Section */}
            {/* < section className="why-choose-service" >
                <div className="container">
                    <h2 className="about-heading">Why Choose The Mount Diva?</h2>
                    <div className="service-name-line"></div>
                    <div className="why-choose-content">
                        <p>
                            Over the last few years, a recurring topic of conversation amongst friends and colleagues
                            has been the noticeable shortage of high quality, property-related home maintenance
                            services in Dubai, which we as landlords and tenants ourselves, have unfortunately
                            experienced firsthand. The opportunity to make a significant difference and deliver a step-
                            change in existing standards was the inspiration behind establishing The Mount diva Team.
                        </p>
                        <p>
                            We propose to do this by offering a best-in-class, residential-focused service in home
                            maintenance. The Mount diva Team has invested in bringing together specialist managers and
                            technicians that collectively possess decades of experience in providing these services in
                            demanding international markets to create <strong>Dubai's premier building service-related
                                maintenance specialists</strong>.
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <h4>Friendly & Professional</h4>
                                <p>Words not typically associated with property maintenance companies, but those frequently used by customers to describe our services.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>Fully Insured</h4>
                                <p>Accountability is usually the elephant in the room for businesses like ours. However, you can relax knowing that we're fully insured.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>Qualified Technicians</h4>
                                <p>In our line of work, it's our reputation that makes (or breaks) us. That's why we only employ qualified technicians with the knowledge and hands-on skills to get it right, first time.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>Value for Money</h4>
                                <p>We combine competitive prices with the highest standards of service, which provides great value for money.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section > */}
            <Footer />
        </div >
    );
};

export default ServiceDetail;