import {
    FaUsersGear,
    FaHelmetSafety,
    FaScrewdriverWrench,
    FaFaucetDrip,
    FaBolt,
    FaBoxesStacked,
    FaTruckRampBox,
    FaPaintRoller,
    FaTractor,
    FaPlug,
} from 'react-icons/fa6';

export const services = [
    {
        icon: FaUsersGear,
        title: 'Workforce Supply',
        description: 'Skilled and semi-skilled manpower to meet project requirements, ensuring efficiency and compliance.',
    },
    {
        icon: FaHelmetSafety,
        title: 'Civil Activities',
        description: 'Civil construction works including foundations, structural works, concrete, and finishing.',
    },
    {
        icon: FaScrewdriverWrench,
        title: 'Maintenance',
        description: 'Preventive and corrective maintenance, inspections, and emergency repairs for operational continuity.',
    },
    {
        icon: FaFaucetDrip,
        title: 'Piping & Ducting',
        description: 'Fabrication, installation, and maintenance of piping and ducting systems for industrial facilities.',
    },
    {
        icon: FaBolt,
        title: 'Electrical Works',
        description: 'Electrical installations, testing, and maintenance covering power distribution and industrial systems.',
    },
    {
        icon: FaBoxesStacked,
        title: 'MEP Materials',
        description: 'Supply of mechanical, electrical, and plumbing materials sourced to specification for projects.',
    },
    {
        icon: FaTruckRampBox,
        title: 'Land Transport',
        description: 'Reliable land transportation of goods and heavy equipment to project sites across Oman.',
    },
    {
        icon: FaPaintRoller,
        title: 'Painting & Finishing',
        description: 'Professional painting and finishing for industrial, commercial, and residential projects.',
    },
    {
        icon: FaTractor,
        title: 'Heavy Equipment Supply',
        description: 'Wholesale of construction, civil and petroleum engineering machinery and equipment, including heavy equipment.',
    },
    {
        icon: FaPlug,
        title: 'Industrial Equipment Supply',
        description: 'Wholesaling of pumps, electricity generators and their supplies.',
    },
];

// Options offered in the contact form's "Requested Service" dropdown
export const serviceOptions = [
    { value: 'workforce', label: 'Workforce Supply' },
    { value: 'civil', label: 'Civil Activities' },
    { value: 'industrial', label: 'Industrial/Electrical/Piping' },
    { value: 'machinery', label: 'Equipment Rental & Supply' },
    { value: 'other', label: 'General Inquiry' },
];
