import { useEffect, useState } from 'react';
import { navLinks } from '../../data/navigation.js';
import useActiveSection from '../../hooks/useActiveSection.js';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeId = useActiveSection(sectionIds);

    // Close the mobile menu with the Escape key
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <header>
            <nav className="navbar">
                <a href="#hero" className="logo">
                    <span className="skyline-text">SKYLINE</span> <span className="solution-text">SOLUTION</span>
                </a>
                <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="primary-nav">
                    {navLinks.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={id === activeId ? 'active' : undefined}
                                aria-current={id === activeId ? 'true' : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className={`menu-toggle${menuOpen ? ' toggle-animation' : ''}`}
                    aria-label="Toggle navigation menu"
                    aria-controls="primary-nav"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </nav>
        </header>
    );
}
