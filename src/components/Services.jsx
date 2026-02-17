import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiShieldCheckLine } from "react-icons/ri";
import { MdOutlineCalculate } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
    const navigate = useNavigate();

    const handleKnowmore = () => {
        navigate('/services');
    };

    // Parent animation (stagger)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25
            }
        }
    };

    // Individual card animation
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="services-wrapper">

            {/* FIRST ROW */}
            <motion.div
                className="services-row-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >

                {/* LEFT TEXT SECTION */}
                <motion.div className="services-left" variants={cardVariants}>
                    <h4 className="service-sub">Our Services</h4>
                    <h1 className="service-title">
                        Real Solutions,<br />Real Impact
                    </h1>
                    <button className="know-btn" onClick={handleKnowmore}>
                        Know More
                    </button>
                </motion.div>

                {/* CARD 1 */}
                <motion.div className="service-card bg-gray" variants={cardVariants}>
                    <div className="service-icon"><HiOutlineDocumentReport /></div>
                    <h3 className="service-head">Accounting & Bookkeeping</h3>
                    <p className="service-desc">
                        Accurate financial record-keeping, cloud-based solutions,
                        payroll processing, and preparation of financial statements
                        in compliance with UAE IFRS.
                    </p>
                </motion.div>

                {/* CARD 2 */}
                <motion.div className="service-card bg-blue" variants={cardVariants}>
                    <div className="service-icon"><RiShieldCheckLine /></div>
                    <h3 className="service-head">Audit & Assurance</h3>
                    <p className="service-desc">
                        Internal & external audits, due diligence, and compliance
                        checks ensuring transparency, accuracy, and adherence to UAE regulations.
                    </p>
                </motion.div>
            </motion.div>


            {/* SECOND ROW */}
            <motion.div
                className="services-row-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >

                <motion.div className="service-card bg-gray" variants={cardVariants}>
                    <div className="service-icon"><MdOutlineCalculate /></div>
                    <h3 className="service-head">Taxation Services</h3>
                    <p className="service-desc">
                        VAT registration & filing, corporate tax planning, excise tax
                        management, and advisory for complete FTA compliance.
                    </p>
                </motion.div>

                <motion.div className="service-card bg-blue" variants={cardVariants}>
                    <div className="service-icon"><TbReportAnalytics /></div>
                    <h3 className="service-head">Financial Planning & Analysis</h3>
                    <p className="service-desc">
                        Budgeting, forecasting, performance analysis, feasibility
                        studies, and KPI tracking to support strategic growth.
                    </p>
                </motion.div>

                <motion.div className="service-card bg-gray" variants={cardVariants}>
                    <div className="service-icon"><BsGraphUp /></div>
                    <h3 className="service-head">Financial Management & Advisory</h3>
                    <p className="service-desc">
                        CFO services, cash flow optimization, business setup support,
                        and strategic financial advisory for long-term stability.
                    </p>
                </motion.div>

            </motion.div>

        </section>
    );
};

export default OurServices;
