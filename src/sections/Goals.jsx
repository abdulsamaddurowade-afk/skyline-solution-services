import SectionHeader from '../components/common/SectionHeader.jsx';
import { RevealGroup, RevealItem } from '../components/common/Reveal.jsx';
import { goals } from '../data/goals.js';

export default function Goals() {
    return (
        <section id="goals" className="goals-section">
            <div className="container">
                <SectionHeader label="Our Goals" title="Where We're Headed" />
                <RevealGroup className="goals-grid">
                    {goals.map(({ title, description }, index) => (
                        <RevealItem className="goal-card" key={title}>
                            <span className="goal-num">{String(index + 1).padStart(2, '0')}</span>
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
