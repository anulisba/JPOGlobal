import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleBookNow = () => {
        navigate('/contact-us');
    };

    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li>
                        <Link
                            to="/"
                            className={location.pathname === '/' ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about-us"
                            className={location.pathname === '/about-us' ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className={location.pathname === '/services' ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact-us"
                            className={location.pathname === '/contact-us' ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="book-button">
                <button onClick={handleBookNow}>Book an Appointment</button>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;
