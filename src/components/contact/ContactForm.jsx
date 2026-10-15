import { useState } from 'react';
import { company } from '../../data/company.js';
import { serviceOptions } from '../../data/services.js';

// Formspree receives each request and emails it to the company inbox
const FORMSPREE_URL = 'https://formspree.io/f/xljgobnp';

const emptyForm = {
    name: '',
    email: '',
    service: serviceOptions[0].value,
    message: '',
};

export default function ContactForm() {
    const [form, setForm] = useState(emptyForm);
    const [state, setState] = useState('idle'); // idle | sending | sent | error
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState('sending');
        setStatus('');

        const fullName = form.name.trim();
        const serviceLabel = serviceOptions.find((option) => option.value === form.service).label;

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: fullName,
                    email: form.email.trim(),
                    service: serviceLabel,
                    message: form.message.trim(),
                    _subject: `Website enquiry: ${serviceLabel}`,
                }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.errors?.map((error) => error.message).join(', ') || 'Request failed');
            }

            setState('sent');
            setStatus(`Thank you, ${fullName}! Your request has been sent. We will get back to you shortly.`);
            setForm(emptyForm);
        } catch {
            setState('error');
            setStatus(`Sorry, your request could not be sent. Please try again, or email us at ${company.email}.`);
        }
    };

    const sending = state === 'sending';

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
            <button type="submit" className="btn btn-submit" disabled={sending}>
                {sending ? 'Sending...' : 'Submit Request'}
            </button>
            <p className={`form-status${state === 'error' ? ' form-status-error' : ''}`} role="status" aria-live="polite">{status}</p>
        </form>
    );
}
