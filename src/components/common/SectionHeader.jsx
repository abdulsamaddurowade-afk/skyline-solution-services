import Reveal from './Reveal.jsx';

export default function SectionHeader({ label, title }) {
    return (
        <Reveal className="section-header">
            <h2>{label}</h2>
            <h3>{title}</h3>
        </Reveal>
    );
}
