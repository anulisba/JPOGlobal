// components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaBuilding, FaGlobeAmericas } from 'react-icons/fa';
import './ContactUs.css'
import Header from './Header';
import Footer from './Footer';
import Page from './ScrollToTop';
import emailjs from 'emailjs-com';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeMap, setActiveMap] = useState('dubai');
    const [activeField, setActiveField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFocus = (fieldName) => {
        setActiveField(fieldName);
    };

    const handleBlur = () => {
        setActiveField(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            'service_6c6do5l',
            'template_4t6imcx',
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                title: formData.subject,
                message: formData.message,
                to_email: 'abhisplanet2025@gmail.com'
            },
            'zQ4O3aRATuQjHFFMg'
        ).then(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }).catch((error) => {
            console.error('Failed to send message:', error);
            setIsSubmitting(false);
            alert('Failed to send message. Please try again later.');
        });
    };

    return (
        <>
            <Header />
            <section id="contact" className="contact-section">
                <Page>
                    <div className="contact-container">
                        {/* Modern Header */}
                        <motion.div
                            className="contact-header"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <div className="jpo-workflow-tag">

                                <span>CONNECT WITH US</span>
                            </div>
                            <h2 className="jpo-workflow-title">
                                Let's Start Your Financial Journey Together
                            </h2>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="contact-decoration">
                            <div className="deco-circle deco-1"></div>
                            <div className="deco-circle deco-2"></div>
                            <div className="deco-line"></div>
                        </div>

                        <div className="contact-content">
                            {/* Contact Information - Modern Design */}
                            <motion.div
                                className="contact-info-card"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* <div className="contact-card-header">
                                    <FaBuilding className="card-header-icon" />
                                    <h2>Our Global Offices</h2>
                                    <p className="card-subtitle">Strategic locations for worldwide coverage</p>
                                </div> */}

                                <div className="contact-info-grid">
                                    {/* Dubai Office */}
                                    <div className='office-loc'>
                                        <motion.div
                                            className="office-card"
                                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                        >
                                            <div className="office-header">
                                                <div className="office-icon">
                                                    <FaMapMarkerAlt />
                                                </div>
                                                <div className="office-tag">Dubai</div>
                                            </div>
                                            <h3>UAE Headquarters</h3>
                                            <p className="office-address">
                                                Qusais, Industrial Area 2<br />
                                                Dubai, United Arab Emirates
                                            </p>
                                            <div className="office-contact">
                                                <FaPhone /> <span>+971 56 251 1837</span>
                                            </div>
                                        </motion.div>

                                        {/* Kerala Office */}
                                        <motion.div
                                            className="office-card"
                                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                        >
                                            <div className="office-header">
                                                <div className="office-icon">
                                                    <FaMapMarkerAlt />
                                                </div>
                                                <div className="office-tag">India</div>
                                            </div>
                                            <h3>Kerala Office</h3>
                                            <p className="office-address">
                                                JPO Global<br />
                                                Angamaly, Ernakulam - 682304<br />
                                                Kerala, India
                                            </p>
                                            <div className="office-contact">
                                                <FaPhone /> <span>+91 97475 15517</span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Working Hours */}
                                    <motion.div
                                        className="hours-card"
                                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                    >
                                        <div className="hours-header">
                                            <FaClock className="hours-icon" />
                                            <h3>Business Hours</h3>
                                        </div>
                                        <div className="hours-schedule">
                                            <div className="hours-day">
                                                <span>Monday - Saturday</span>
                                                <span className="hours-time">9:00 AM - 6:00 PM</span>
                                            </div>
                                            <div className="hours-day">
                                                <span>Sunday</span>
                                                <span className="hours-time closed">Closed</span>
                                            </div>
                                        </div>
                                        <p className="hours-note">*Appointments available outside business hours</p>
                                    </motion.div>
                                </div>

                                {/* Interactive Map Section */}
                                <div className="map-section">
                                    <div className="map-header">
                                        <h3>Visit Our Office</h3>
                                        <div className="map-switcher">
                                            <button
                                                className={`map-switch-btn ${activeMap === 'dubai' ? 'active' : ''}`}
                                                onClick={() => setActiveMap('dubai')}
                                            >
                                                Dubai Location
                                            </button>
                                            <button
                                                className={`map-switch-btn ${activeMap === 'kerala' ? 'active' : ''}`}
                                                onClick={() => setActiveMap('kerala')}
                                            >
                                                Kerala Location
                                            </button>
                                        </div>
                                    </div>
                                    <div className="map-container">
                                        {activeMap === 'dubai' && (
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.886178276538!2d55.37862017538427!3d25.274414077661387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzI3LjkiTiA1NcKwMjInNTIuMyJF!5e0!3m2!1sen!2sin!4v1751958930555!5m2!1sen!2sin"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Dubai Office Location"
                                            ></iframe>
                                        )}
                                        {activeMap === 'kerala' && (
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.963287605679!2d76.3158454750303!3d9.937012690165187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTYnMTMuMyJOIDc2wrAxOScwNi4zIkU!5e0!3m2!1sen!2sin!4v1752421803120!5m2!1sen!2sin"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Kerala Office Location"
                                            ></iframe>
                                        )}
                                        <div className="map-overlay"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form - Modern Design */}
                            <motion.div
                                className="contact-form-modern"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="form-header">
                                    <h2>Send Your Inquiry</h2>
                                    <p>Fill out the form below and our team will respond within 24 hours</p>
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        className="success-message-modern"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="success-icon-wrapper">
                                            <FaPaperPlane className="success-icon-modern" />
                                            <div className="success-circle"></div>
                                        </div>
                                        <h3>Message Received!</h3>
                                        <p>Thank you for reaching out. Our financial consultants will contact you shortly to discuss your requirements.</p>
                                        <button
                                            className="send-another-btn"
                                            onClick={() => setIsSubmitted(false)}
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form className="modern-contact-form" onSubmit={handleSubmit}>
                                        <div className="form-row-modern">
                                            <div className={`form-group-modern ${activeField === 'name' ? 'active' : ''}`}>
                                                <label>Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('name')}
                                                    onBlur={handleBlur}
                                                    placeholder="Enter your full name"
                                                    required
                                                    className="modern-input"
                                                />
                                                <div className="input-border"></div>
                                            </div>

                                            <div className={`form-group-modern ${activeField === 'email' ? 'active' : ''}`}>
                                                <label>Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('email')}
                                                    onBlur={handleBlur}
                                                    placeholder="Enter your email"
                                                    required
                                                    className="modern-input"
                                                />
                                                <div className="input-border"></div>
                                            </div>
                                        </div>

                                        <div className="form-row-modern">
                                            <div className={`form-group-modern ${activeField === 'phone' ? 'active' : ''}`}>
                                                <label>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('phone')}
                                                    onBlur={handleBlur}
                                                    placeholder="Enter your phone number"
                                                    className="modern-input"
                                                />
                                                <div className="input-border"></div>
                                            </div>

                                            <div className={`form-group-modern ${activeField === 'subject' ? 'active' : ''}`}>
                                                <label>Subject *</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('subject')}
                                                    onBlur={handleBlur}
                                                    placeholder="What is this regarding?"
                                                    required
                                                    className="modern-input"
                                                />
                                                <div className="input-border"></div>
                                            </div>
                                        </div>

                                        <div className={`form-group-modern ${activeField === 'message' ? 'active' : ''}`}>
                                            <label>Your Message *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('message')}
                                                onBlur={handleBlur}
                                                placeholder="Tell us about your financial goals or questions..."
                                                rows="4"
                                                required
                                                className="modern-textarea"
                                            ></textarea>
                                            <div className="input-border"></div>
                                            <div className="char-count">
                                                {formData.message.length}/500 characters
                                            </div>
                                        </div>

                                        <motion.button
                                            className="submit-btn-modern"
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="btn-content">
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="sending-dots">
                                                            <span className="dot">.</span>
                                                            <span className="dot">.</span>
                                                            <span className="dot">.</span>
                                                        </span>
                                                        Processing Your Request
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <FaPaperPlane className="send-icon-modern" />
                                                    </>
                                                )}
                                            </span>
                                            <div className="btn-gradient"></div>
                                        </motion.button>

                                        <p className="form-note">
                                            By submitting this form, you agree to our privacy policy. We respect your confidentiality.
                                        </p>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </Page>
            </section>
            <Footer />
        </>
    );
};

export default ContactSection;