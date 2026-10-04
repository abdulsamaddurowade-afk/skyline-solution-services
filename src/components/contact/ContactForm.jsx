import { useState } from 'react';
import { company } from '../../data/company.js';
import { serviceOptions } from '../../data/services.js';

const emptyForm = {
    name: '',
    email: '',
    service: serviceOptions[0].value,
    message: '',
};

export default function ContactForm() {
    const [form, setForm] = useState(emptyForm);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
    };

    // No backend yet: hands the request to the visitor's email app
    const handleSubmit = (e) => {
        e.preventDefault();

        const fullName = form.name.trim();
        const serviceLabel = serviceOptions.find((option) => option.value === form.service).label;
        const subject = `Website enquiry: ${serviceLabel}`;
        const body = [
            `Name: ${fullName}`,
            `Email: ${form.email.trim()}`,
            `Requested service: ${serviceLabel}`,
            '',
            form.message.trim(),
        ].join('\n');

        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setStatus(`Thank you, ${fullName}! Your email app should open with your request ready to send. If it doesn't, please email us at ${company.email}.`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" autoComplete="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" autoComplete="email" required placeholder="Your email address" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="service">Requested Service</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                    {serviceOptions.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">Project Requirements Details</label>
                <textarea id="message" name="message" rows="4" placeholder="Describe your project scope..." value={form.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-submit">Submit Request</button>
            <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
    );
}
