import React from "react";
import "./ContactLanding.css";
import { useNavigate } from 'react-router-dom';
const ContactLandingSection = () => {
    const navigate = useNavigate()
    const handleBookNow = () => {
        navigate('/contact-us');
    };
    return (
        <section className="contact-landing-wrapper">
            <div className="contact-landing">

                <div className="contact-l-content">
                    <h1>Check Out The Easy Way<br />To Get Our Service</h1>
                    <button onClick={handleBookNow}>Book an Appointment</button>
                </div>

            </div>
        </section>
    );
};

export default ContactLandingSection;
