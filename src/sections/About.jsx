import { FaEye, FaBullseye } from 'react-icons/fa6';
import SectionHeader from '../components/common/SectionHeader.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Slideshow from '../components/common/Slideshow.jsx';
import { projectPhotos } from '../data/projectPhotos.js';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <SectionHeader label="About Us" title="Built on Expertise, Driven by Results" />
                <div className="about-grid">
                    <Reveal className="about-text">
                        <p>Skyline Solution Services is an Omani construction and workforce supply company established in 2024. We offer workforce supply, industrial electrical work, piping services, and all activities related to industrial construction.</p>
                        <p>We are determined to explore opportunities that require our skills and grow in the coming years.</p>

                        <div className="vision-mission">
                            <div className="vm-card">
                                <FaEye aria-hidden="true" />
                                <h4>01 Our Vision</h4>
                                <p>To be one of the leading companies in Oman, emphasizing support and delivering our best services to achieve customer satisfaction and long-term sustainability.</p>
                            </div>
                            <div className="vm-card">
                                <FaBullseye aria-hidden="true" />
                                <h4>02 Our Mission</h4>
                                <p>To change how people work together offering technical know-how and hands-on guidance to support businesses, through quality, affordable, and reliable service.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal className="about-image">
                        <Slideshow slides={projectPhotos} label="Project photos" />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
