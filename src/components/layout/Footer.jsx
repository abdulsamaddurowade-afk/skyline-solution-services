import { company } from '../../data/company.js';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
