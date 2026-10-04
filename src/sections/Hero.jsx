import { company } from '../data/company.js';

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>{company.name.toUpperCase()}</h1>
                <p>{company.tagline}</p>
                <div className="hero-buttons">
                    <a href="#services" className="btn btn-primary">Our Services</a>
                    <a href="#contact" className="btn btn-secondary">Contact Us</a>
                </div>
            </div>
        </section>
    );
}
