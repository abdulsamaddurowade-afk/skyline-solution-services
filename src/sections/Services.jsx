import SectionHeader from '../components/common/SectionHeader.jsx';
import { RevealGroup, RevealItem } from '../components/common/Reveal.jsx';
import { services } from '../data/services.js';

export default function Services() {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <SectionHeader label="What We Do" title="Our Services" />
                <RevealGroup className="services-grid">
                    {services.map(({ icon: Icon, title, description }, index) => (
                        <RevealItem className="service-card" key={title} whileHover={{ y: -5 }}>
                            <div className="service-icon"><Icon aria-hidden="true" /></div>
                            <h4><span>{String(index + 1).padStart(2, '0')}</span> {title}</h4>
                            <p>{description}</p>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
