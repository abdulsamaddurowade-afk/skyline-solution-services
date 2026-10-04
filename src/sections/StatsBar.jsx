import { RevealGroup, RevealItem } from '../components/common/Reveal.jsx';
import { stats } from '../data/company.js';

export default function StatsBar() {
    return (
        <RevealGroup as="section" className="stats-bar">
            {stats.map(({ value, label }) => (
                <RevealItem className="stat-item" key={label}>
                    <h3>{value}</h3>
                    <p>{label}</p>
                </RevealItem>
            ))}
        </RevealGroup>
    );
}
