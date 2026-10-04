import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import ContactForm from '../components/contact/ContactForm.jsx';
import Reveal from '../components/common/Reveal.jsx';
import { company } from '../data/company.js';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    <Reveal className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>Let's discuss how our technical expertise and hands-on guidance can support your next industrial scale project.</p>
                        <div className="info-details">
                            <div className="info-item">
                                <FaPhone aria-hidden="true" />
                                <div>
                                    <h5>Phone</h5>
                                    <p><a href={company.phoneHref}>{company.phone}</a></p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaEnvelope aria-hidden="true" />
                                <div>
                                    <h5>Email</h5>
                                    <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaLocationDot aria-hidden="true" />
                                <div>
                                    <h5>Location</h5>
                                    <p>{company.location}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal className="contact-form-container">
                        <ContactForm />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
