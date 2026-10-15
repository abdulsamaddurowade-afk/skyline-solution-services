import SectionHeader from '../components/common/SectionHeader.jsx';
import { RevealGroup, RevealItem } from '../components/common/Reveal.jsx';
import { clients } from '../data/clients.js';

export default function Clients() {
    return (
        <section id="clients" className="clients-section">
            <div className="container">
                <SectionHeader label="Our Clients" title="Companies We Work With" />
                <RevealGroup className="clients-grid">
                    {clients.map(({ name, logo }) => (
                        <RevealItem className="client-card" key={name}>
                            <div className="client-logo">
                                <img src={logo} alt={`${name} logo`} loading="lazy" />
                            </div>
                            <h4>{name}</h4>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
