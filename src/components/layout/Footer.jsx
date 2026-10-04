import { FaLock } from 'react-icons/fa6';
import { company } from '../../data/company.js';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</p>
                <p className="confidentiality"><FaLock aria-hidden="true" /> Confidential Company Profile</p>
            </div>
        </footer>
    );
}
