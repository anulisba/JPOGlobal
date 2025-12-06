import React, { useState, useEffect, useRef } from 'react';
import './ProjectDetail.css';
import Page from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const ProjectDetailPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [overlayImage, setOverlayImage] = useState(null);
    const sectionRefs = useRef([]);

    const location = useLocation();
    const data = location.state?.project || {};
    console.log("data", data)
    const {
        title = 'No Title',
        description = '',
        detail = '',
        category = '',
        client = '',
        location: projectLocation = '',
        duration = '',
        year = '',
        space = '',
        designPhilosophy = '',
        designPhilosophy1head = '',
        designPhilosophy1desc = '',
        designPhilosophy2head = '',
        designPhilosophy2desc = '',
        designPhilosophy3head = '',
        designPhilosophy3desc = '',
        image,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    } = data;

    const viewImages = [image1, image2, image3, image4, image5, image6, image7, image8].filter(Boolean);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            sectionRefs.current.forEach((ref) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                    if (isInView) {
                        ref.classList.add('visible');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openOverlay = (img) => {
        setOverlayImage(img);
        setIsOverlayVisible(true);
        document.body.style.overflow = 'hidden';
    };

    const closeOverlay = () => {
        setIsOverlayVisible(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <Page>
            <div className="project-detail">
                <Header />

                {/* Hero Section */}
                <div className="hero-container" ref={el => sectionRefs.current[0] = el}>
                    <div className="hero-image-container">
                        <img src={image} alt="Main Project" className="hero-image" />
                        <div className="project-detail-info-overlay"></div>
                        <div className="hero-content">
                            <div className="project-meta">
                                <span>{category}</span>
                                <span>•</span>
                                <span>{space}</span>
                                <span>•</span>
                                <span>{year}</span>
                            </div>
                            <h1 className="project-title">{title}</h1>
                        </div>
                    </div>

                    <div className="project-description" ref={el => sectionRefs.current[1] = el}>
                        <p>{detail}</p>
                        <div className="project-details">
                            <div className="detail-item">
                                <h3>Client</h3>
                                <p>{client}</p>
                            </div>
                            <div className="detail-item">
                                <h3>Location</h3>
                                <p>{projectLocation}</p>
                            </div>
                            <div className="detail-item">
                                <h3>Duration</h3>
                                <p>{duration}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="gallery-section" ref={el => sectionRefs.current[2] = el}>
                    <div className="section-header">
                        <h2>Project Gallery</h2>
                        <p>Explore the transformation through detailed visuals</p>
                    </div>
                    <div className="gallery-grid-modern">
                        {viewImages.map((img, index) => (
                            <div key={index} className="gallery-tile" onClick={() => openOverlay(img)}>
                                <img src={img} alt={`Project View ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Design Philosophy Section */}
                <div className="philosophy-section" ref={el => sectionRefs.current[3] = el}>
                    <div className="philosophy-content">
                        <div className="text-content">
                            <h2>Design Philosophy</h2>
                            <p>
                                {designPhilosophy}
                            </p>
                            <div className="philosophy-points">
                                <div className="point">
                                    <div className="point-number">01</div>
                                    <div>
                                        <h3>{designPhilosophy1head}</h3>
                                        <p>{designPhilosophy1desc}</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <div className="point-number">02</div>
                                    <div>
                                        <h3>{designPhilosophy2head}</h3>
                                        <p>{designPhilosophy2desc}</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <div className="point-number">03</div>
                                    <div>
                                        <h3>{designPhilosophy3head}</h3>
                                        <p>{designPhilosophy3desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="philosophy-image">
                            <img src={image2 || image1} alt="Design philosophy" />
                            <div className="image-overlay-tint"></div>
                        </div>
                    </div>
                </div>

                {/* Image Overlay Modal */}
                {isOverlayVisible && (
                    <div className="image-overlay-modal" onClick={closeOverlay}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="close-modal" onClick={closeOverlay}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <img src={overlayImage} alt="Full size" className="overlay-image" />
                        </div>
                    </div>
                )}

                <Footer />
            </div>
        </Page>
    );
};

export default ProjectDetailPage;
