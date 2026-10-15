import {
    FaUserTie,
    FaGears,
    FaFileInvoiceDollar,
    FaHandshake,
    FaHelmetSafety,
    FaTruckFast,
} from 'react-icons/fa6';

// Organisation structure, top to bottom
export const leadership = [
    { role: 'Managing Director', description: 'Strategy & overall leadership', icon: FaUserTie },
    { role: 'Operations Manager', description: 'Oversees all site activities', icon: FaGears },
];

export const departments = [
    { role: 'Finance & Admin', description: 'Accounts & administration', icon: FaFileInvoiceDollar },
    { role: 'Sales Executive', description: 'Client outreach & tenders', icon: FaHandshake },
    { role: 'Site Supervisor', description: 'Civil, piping & electrical', icon: FaHelmetSafety },
    { role: 'Logistics Coordinator', description: 'Transport & MEP supply', icon: FaTruckFast },
];
