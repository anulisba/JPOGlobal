import React from "react";
import "./Plans.css";
import { FaRegFileAlt } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Plans = () => {
    const navigate = useNavigate();
    const handleKnowmore = () => {
        navigate('/services')
    }
    return (
        <section className="package-section">

            <div className="package-top">
                <h4 className="package-sub">Our Packages</h4>
                <h1 className="package-title">Your Financial Partner For Success</h1>
            </div>

            <div className="package-card-container">

                {/* Basic Plan */}
                <div className="package-card fade-up">
                    <div className="package-icon">
                        <FaRegFileAlt />
                    </div>
                    <h3 className="package-name">Basic Plan</h3>
                    <p className="package-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="package-btn" onClick={handleKnowmore}>Know More</button>
                </div>

                {/* Standard Plan */}
                <div className="package-card fade-up" style={{ animationDelay: "0.2s" }}>
                    <div className="package-icon">
                        <FaClipboardCheck />
                    </div>
                    <h3 className="package-name">Standard Plan</h3>
                    <p className="package-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="package-btn" onClick={handleKnowmore}>Know More</button>
                </div>

                {/* Customized Plan */}
                <div className="package-card fade-up" style={{ animationDelay: "0.35s" }}>
                    <div className="package-icon">
                        <FaCogs />
                    </div>
                    <h3 className="package-name">Customized Plan</h3>
                    <p className="package-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="package-btn" onClick={handleKnowmore}>Know More</button>
                </div>
            </div>

        </section>
    );
};

export default Plans;
