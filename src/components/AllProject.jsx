import React, { useState, useEffect, useRef } from 'react';
import './AllProject.css';

// Importing local images
import project1 from '../assets/bg.jpg';
import project2 from '../assets/bg1.jpg';
import project3 from '../assets/bg2.png';
import project4 from '../assets/project1.png';
import project5 from '../assets/project2.png';
import project6 from '../assets/project3.png';
import Page from './ScrollToTop';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isScrolled, setIsScrolled] = useState(false);
    const projectRefs = useRef([]);
    const navigate = useNavigate();
    const projects = [
        {
            id: 1,
            title: "Modern Living Spaces",
            description: "Minimalist design with warm accents creating a cozy yet sophisticated atmosphere",
            detail: "This residential project in Kakkanad, Kerala, showcases a minimalist design approach enhanced by warm accents, creating a cozy and sophisticated living environment. Spread over 2300 sqft, the space balances simplicity with comfort, emphasizing clean lines, functional layouts, and natural textures. Designed for client Alan Alex, the interiors blend modern aesthetics with homely touches, making every corner inviting and practical. Completed within a month in 2024, this project reflects thoughtful craftsmanship and timeless elegance.",
            category: "residential",
            client: "Alan Alex",
            location: "Kakkanad, Kerala, India",
            duration: "1 Month",
            year: "2024",
            space: "2300 sqft",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2204_xm1wvh.jpg",
            image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2211_ylsviu.jpg",
            image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2209_dxc6nb.jpg",
            image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2194_fs3i3p.jpg",
            image4: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2210_l3cwqc.jpg",
            image5: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2208_w3g3qq.jpg",
            image6: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2204_xm1wvh.jpg",
            image7: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2206_hhkh0n.jpg",
            image8: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697880/IMG_2189_enezlt.jpg",
            designPhilosophy: "Our approach centers on creating spaces that harmonize form and function. We believe in the power of simplicity, where every element serves a purpose and contributes to the overall aesthetic. from data",
            designPhilosophy1head: "Spatial Harmony",
            designPhilosophy1desc: "Creating balanced proportions and flow between different areas",
            designPhilosophy2head: "Light & Texture",
            designPhilosophy2desc: "Strategic use of natural light and layered textures",
            designPhilosophy3head: "Premium Elegance",
            designPhilosophy3desc: "Creating balanced proportions and flow between different areas",
        },
        {
            id: 2,
            title: "Experion Office Revamp",
            description: "A sleek, modern workspace designed to boost creativity and teamwork.",
            detail: "The Experion Office Revamp is a sleek and modern workspace designed to inspire creativity and collaboration. Spanning 3500 sqft in Infopark Kochi, this project blends functional open layouts with natural light and elegant textures to foster productivity and comfort. Every detail reflects a balance of professionalism and warmth, transforming the office into a dynamic hub for innovation.",
            category: "commercial",
            client: "Experion",
            location: "Infopark, Kochi, Kerala, India",
            duration: "2 Months",
            year: "2024",
            space: "3500 sqft",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699822/3_odtuao.png",
            image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699822/1_vyxceo.png",
            image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699823/4_gwpigk.png",
            image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699822/3_odtuao.png",
            image4: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699822/2_wxhiug.png",
            designPhilosophy: "A dynamic space that balances style and function to inspire innovation.",
            designPhilosophy1head: "Team Flow",
            designPhilosophy1desc: "Open spaces that spark collaboration.",
            designPhilosophy2head: "Comfort Fit",
            designPhilosophy2desc: "Ergonomic design for all-day ease.",
            designPhilosophy3head: "Vibrant Mood",
            designPhilosophy3desc: "Smart lighting and textures that energize."
        },
        {
            id: 3,
            title: "Cozy Compact Apartment",
            description: "Smart design solutions maximizing comfort and style in a limited space",
            detail: "This compact apartment design transforms limited space into a comfortable and stylish home through clever use of multifunctional furniture and smart storage solutions. Emphasizing natural light and light color palettes, the design creates an open, airy feel that maximizes the perceived space. Clean, modern lines and minimal decor maintain an uncluttered atmosphere, making the apartment both practical and visually appealing for urban living.",
            category: "residential",
            client: "Maya Johnson",
            location: "Bangalore, Karnataka, India",
            duration: "3 Weeks",
            year: "2025",
            space: "650 sqft",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700345/1_wk6rxy.png",
            image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/4_gglhmz.png",
            image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/3_qu8axr.png",
            image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700345/1_wk6rxy.png",
            image4: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/3_qu8axr.png",
            designPhilosophy: "Optimizing every inch with multifunctional furniture and bright, airy design to create an open and welcoming home.",
            designPhilosophy1head: "Space Efficiency",
            designPhilosophy1desc: "Creative storage and furniture layouts to maximize usable space.",
            designPhilosophy2head: "Natural Light",
            designPhilosophy2desc: "Use of light colors and large windows to enhance brightness.",
            designPhilosophy3head: "Modern Minimalism",
            designPhilosophy3desc: "Clean lines and simple decor keeping the space uncluttered.",
            detailedDescription: "This compact apartment project showcases innovative interior design that transforms a small footprint into a stylish and functional home. By incorporating multi-purpose furniture and open layouts, the space feels larger and more inviting. Thoughtful color schemes and abundant natural light create a fresh, airy ambiance perfect for urban living."
        },
        {
            id: 4,
            title: "Harmonious Fusion Home",
            description: "A uniquely crafted residence that blends diverse design styles to reflect the client's vision for creativity, comfort, and character",
            detail: "This residential project, Smithalayam Harippad, located in Haripad, Kerala, is a full-construction venture completed within just three months, covering exterior design, complete construction, and minimal interior work. Developed for client Smitha, the home was built at a cost of ₹35 lakhs and reflects a unique blend of design elements that don’t strictly follow either traditional or contemporary styles. Instead, the design embraces a mix of aesthetics, curated to suit the client’s desire for variety and distinctiveness. With clean lines, efficient spatial planning, and selective interior highlights, the project stands out as a personalized and practical living space. This is a testament to swift execution, creative flexibility, and quality craftsmanship..",
            category: "residential",
            client: "Smitha",
            location: "Harippad , Kerala, India",
            duration: "3 Months",
            year: "2025",
            space: "2000 sqft",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751955833/WhatsApp_Image_2025-07-07_at_10.24.57_PM_1_lfgge5.jpg",
            image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751955833/WhatsApp_Image_2025-07-07_at_10.24.56_PM_1_xibott.jpg",
            image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751955833/WhatsApp_Image_2025-07-07_at_10.24.57_PM_eachcg.jpg",
            image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751955833/WhatsApp_Image_2025-07-07_at_10.24.56_PM_bogszw.jpg",
            designPhilosophy: "Blending diverse design elements to create a home that reflects individuality while maintaining comfort and functionality.",
            designPhilosophy1head: "Eclectic Balance",
            designPhilosophy1desc: "A mix of traditional and modern touches curated to suit the client’s desire for variety.",
            designPhilosophy2head: "Efficient Execution",
            designPhilosophy2desc: "Well-planned layouts and construction completed within a tight three-month timeline.",
            designPhilosophy3head: "Minimal Interiors",
            designPhilosophy3desc: "Simple, purpose-driven interior elements that complement the structural design without overwhelming it.",
            detailedDescription: "Smithalayam Haripad is a full-construction residential project that stands out for its unique fusion of styles. Designed and built in just three months, the home reflects the client’s wish for variety rather than adhering to a single theme. The result is a thoughtfully executed space where design flexibility, practicality, and subtle elegance coexist."

        },
        {
            id: 5,
            title: "Algadheer Trading Office",
            description: "An open-view office interior designed for functionality, flow, and seamless screen visibility.",
            detail: "Located in Dubai, the Algadheer Trading Office project spans 1500 square feet and was completed in just two months. The client’s core requirement was the ability to view the main screen from anywhere within the office. Our design focused on achieving this goal by using open layouts, strategic furniture placement, and unobstructed visual pathways. With clean lines and professional aesthetics, the space supports both form and function, enabling a smooth workflow and a sophisticated office environment.",
            category: "commercial",
            client: "Algadeer Property",
            location: "Dubai, UAE",
            duration: "2 Months",
            year: "2025",
            space: "1500 sqft",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957057/WhatsApp_Image_2025-07-08_at_11.41.31_AM_eq8ag1.jpg",
            image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957057/WhatsApp_Image_2025-07-08_at_11.41.32_AM_alx0pb.jpg",
            image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957057/WhatsApp_Image_2025-07-08_at_11.41.31_AM_eq8ag1.jpg",
            image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957057/WhatsApp_Image_2025-07-08_at_11.41.31_AM_1_muqawd.jpg",
            designPhilosophy: "Creating an open, functional workspace that ensures maximum visibility and fluidity, tailored to the operational needs of a dynamic trading office.",
            designPhilosophy1head: "Visual Accessibility",
            designPhilosophy1desc: "Strategically planned layout for unobstructed visibility of the central screen from all parts of the office.",
            designPhilosophy2head: "Functional Flow",
            designPhilosophy2desc: "Open walkways and purposeful furniture placement to enhance movement and collaboration.",
            designPhilosophy3head: "Professional Aesthetics",
            designPhilosophy3desc: "Clean lines, modern materials, and a neutral palette reflecting a refined business environment.",
            detailedDescription: "This commercial office project for Algadeer Property focused on aligning spatial design with a unique operational requirement: the ability to view the screen from any position within the workspace. By leveraging open planning, thoughtful alignment, and sleek finishes, the final interior not only meets the functional brief but elevates the overall professional presence of the brand. Completed efficiently within two months, it stands as a smart example of purposeful office design in a modern business context."
        },
        {
            id: 6,
            title: "Al Gadherr Cooperative Office",
            description: "A spacious office designed with simplicity and variety, accented by a luxurious golden theme.",
            detail: "Located in the Emirates Tower, this 6000 sqft cooperative office project was meticulously crafted to fulfill the client’s vision of simplicity combined with variety and elegance. Every aspect—from flooring and ceiling to carpentry—was carefully designed and executed to incorporate a cohesive golden theme that adds warmth and sophistication throughout the space. The design balances functional office requirements with aesthetic appeal, resulting in a welcoming and productive environment.",
            category: "commercial",
            client: "Al Gadherr Cooperative",
            location: "Emirates Tower, Dubai, UAE",
            duration: "3 Months",
            year: "2025",
            space: "6000 sqft",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957729/WhatsApp_Image_2025-07-08_at_11.42.58_AM_lvwx09.jpg",
            image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957730/WhatsApp_Image_2025-07-08_at_11.43.02_AM_r59stt.jpg",
            image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957729/WhatsApp_Image_2025-07-08_at_11.42.58_AM_lvwx09.jpg",
            image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957728/WhatsApp_Image_2025-07-08_at_11.42.52_AM_prsofn.jpg",
            image4: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957729/WhatsApp_Image_2025-07-08_at_11.42.53_AM_wwnwbw.jpg",
            image5: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751957730/WhatsApp_Image_2025-07-08_at_11.42.55_AM_pjwkzn.jpg",
            image6: "https://res.cloudinary.com/dpo91btlc/image/upload/v1751958013/WhatsApp_Image_2025-07-08_at_11.43.01_AM_xk9r6e.jpg",
            designPhilosophy: "Marrying simplicity and variety with elegant golden accents to create a refined yet welcoming office atmosphere.",
            designPhilosophy1head: "Elegant Simplicity",
            designPhilosophy1desc: "Clean, uncluttered spaces emphasizing minimalism with purposeful design choices.",
            designPhilosophy2head: "Thematic Consistency",
            designPhilosophy2desc: "Incorporation of golden hues in flooring, ceiling, and carpentry to unify the design theme.",
            designPhilosophy3head: "Functional Luxury",
            designPhilosophy3desc: "Balancing practical office needs with sophisticated materials and finishes for a premium experience.",
            detailedDescription: "This expansive office project at Emirates Tower reflects a perfect harmony of simple yet varied design elements, enhanced by a luxurious golden theme throughout. By overseeing all aspects including flooring, ceiling, and carpentry, the design team delivered a space that is both functional and visually impressive. The result is an elegant cooperative office environment that meets the client’s expectations for style and productivity."
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleProjectDetail = (project) => {
        navigate("/project-detail", { state: { project } })
    }
    return (
        <Page>
            <div className="projects-page">
                <Header />
                {/* Hero section */}
                <div
                    className="projects-hero"
                    style={{
                        backgroundPosition: `center ${isScrolled ? -window.scrollY * 0.3 : 0}px`
                    }}
                >
                    <div className="all-project-hero-content">
                        <h1>Our Design Portfolio</h1>
                        <p>Explore our curated collection of interior design projects</p>
                    </div>
                </div>

                {/* Filter bar */}
                <div className="filter-bar">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('residential')}
                    >
                        Residential
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('commercial')}
                    >
                        Commercial
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'hospitality' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('hospitality')}
                    >
                        Hospitality
                    </button>
                </div>

                {/* Projects grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                        >
                            <div className="card-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="card-image"
                                />
                                <div className="minimal-info">
                                    <h3>{project.title}</h3>
                                    <div className="project-category">{project.category}</div>
                                </div>
                                <div className="full-overlay">
                                    <div className="overlay-content">
                                        <h3>{project.title}</h3>
                                        <div className="project-category">{project.category}</div>
                                        <p>{project.description}</p>
                                        <button className="view-project-btn" onClick={() => handleProjectDetail(project)}>
                                            View Project
                                            <span className="arrow">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA section */}
                {/* <div className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to transform your space?</h2>
                        <button className="cta-button">
                            Schedule a Consultation
                        </button>
                    </div>
                </div> */}
            </div>
            <Footer />
        </Page>
    );
};

export default ProjectsPage;