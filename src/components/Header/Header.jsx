import { useState } from 'react';
import { Menu } from 'lucide-react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <header className={`header ${isOpen ? 'open' : ''}`}>
                <div className="header-container">
                    <div className="logo-area" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="logo-anim">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <polygon
                                        points="90,50 70,84.641 30,84.641 10,50 30,15.359 70,15.359"
                                        fill="#101828"
                                        stroke="#00bcd4"
                                        strokeWidth="2.5"
                                    >
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            from="0 50 50"
                                            to="360 50 50"
                                            dur="8s"
                                            repeatCount="indefinite"
                                        />
                                    </polygon>
                                </g>
                                <polyline
                                    points="38,60 25,50 38,40"
                                    fill="none"
                                    stroke="#00bcd4"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    points="62,60 75,50 62,40"
                                    fill="none"
                                    stroke="#f43f5e"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <line
                                    x1="46" y1="38" x2="54" y2="62"
                                    stroke="#22223b"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                >
                                    <animate
                                        attributeName="opacity"
                                        values="1;0.3;1"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </line>
                                <circle cx="28" cy="25" r="2.5" fill="#00bcd4">
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        values="1;1.4;1"
                                        begin="0s"
                                        dur="2s"
                                        repeatCount="indefinite"
                                        additive="sum"
                                    />
                                </circle>
                                <circle cx="72" cy="75" r="2.5" fill="#f43f5e">
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        values="1;1.4;1"
                                        begin="1s"
                                        dur="2s"
                                        repeatCount="indefinite"
                                        additive="sum"
                                    />
                                </circle>
                                <circle cx="50" cy="50" r="2" fill="#22223b" />
                            </svg>
                        </div>
                        <span className="logo-text">Portfoliyo</span>
                    </div>

                    <nav className="nav-buttons">
                        {navLinks.map(link => (
                            <button
                                key={link.label}
                                className="nav-button"
                                onClick={() => {
                                    if (link.href.startsWith('#')) {
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        navigate(link.href);
                                    }
                                }}
                            >
                                <span>{link.label}</span>
                                <span className="nav-underline" />
                            </button>
                        ))}
                    </nav>

                    <Menu className="menu-icon" onClick={() => setIsOpen(true)} />
                </div>
                <div className="gradient-strip" />
            </header>

            <div className={`drawer ${isOpen ? 'open' : ''}`}>
                <div className="drawer-close">
                    <button onClick={() => setIsOpen(false)}>✕</button>
                </div>
                <div className="drawer-links">
                    <a
                        href="/projects"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            navigate('/projects');
                        }}
                    >
                        Projects
                    </a>
                    <a
                        href="/skills"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            navigate('/skills');
                        }}
                    >
                        Skills
                    </a>
                    <a href="/certification" onClick={() => setIsOpen(false)}>Certifications</a>
                    {/* Updated Resume Link */}
                    <a href="/Paras_Resume.pdf" download className="resume-btn">
                        Download Resume
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
