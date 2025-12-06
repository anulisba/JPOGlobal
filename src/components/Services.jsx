import React from "react";
import "./Services.css";
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
    }
    return (
        <section className="services-wrapper">

            {/* FIRST ROW */}
            <div className="services-row-1">

                {/* LEFT TEXT SECTION */}
                <div className="services-left animate-slide">
                    <h4 className="service-sub">Our Services</h4>
                    <h1 className="service-title">
                        Real Solutions,<br />Real Impact
                    </h1>
                    <button className="know-btn" onClick={handleKnowmore}>Know More</button>
                </div>

                {/* CARD 1 */}
                <div className="service-card bg-gray animate-fade">
                    <div className="service-icon"><HiOutlineDocumentReport /></div>
                    <h3 className="service-head">Accounting & Bookkeeping</h3>
                    <p className="service-desc">
                        Accurate financial record-keeping, cloud-based solutions,
                        payroll processing, and preparation of financial statements
                        in compliance with UAE IFRS.
                    </p>
                    <div className="service-arrow">→</div>
                </div>

                {/* CARD 2 */}
                <div className="service-card bg-blue animate-fade">
                    <div className="service-icon"><RiShieldCheckLine /></div>
                    <h3 className="service-head">Audit & Assurance</h3>
                    <p className="service-desc">
                        Internal & external audits, due diligence, and compliance
                        checks ensuring transparency, accuracy, and adherence to UAE regulations.
                    </p>
                    <div className="service-arrow">→</div>
                </div>
            </div>

            {/* SECOND ROW */}
            <div className="services-row-2">

                {/* CARD 3 */}
                <div className="service-card bg-gray animate-fade">
                    <div className="service-icon"><MdOutlineCalculate /></div>
                    <h3 className="service-head">Taxation Services</h3>
                    <p className="service-desc">
                        VAT registration & filing, corporate tax planning, excise tax
                        management, and advisory for complete FTA compliance.
                    </p>
                    <div className="service-arrow">→</div>
                </div>

                {/* CARD 4 */}
                <div className="service-card bg-blue animate-fade">
                    <div className="service-icon"><TbReportAnalytics /></div>
                    <h3 className="service-head">Financial Planning & Analysis</h3>
                    <p className="service-desc">
                        Budgeting, forecasting, performance analysis, feasibility
                        studies, and KPI tracking to support strategic growth.
                    </p>
                    <div className="service-arrow">→</div>
                </div>

                {/* CARD 5 */}
                <div className="service-card bg-gray animate-fade">
                    <div className="service-icon"><BsGraphUp /></div>
                    <h3 className="service-head">Financial Management & Advisory</h3>
                    <p className="service-desc">
                        CFO services, cash flow optimization, business setup support,
                        and strategic financial advisory for long-term stability.
                    </p>
                    <div className="service-arrow">→</div>
                </div>

            </div>
        </section>
    );
};

export default OurServices;
