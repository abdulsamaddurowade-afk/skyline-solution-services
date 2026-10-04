import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const groupVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

// Play once, when a little of the element has scrolled into view
const viewport = { once: true, amount: 0.15 };

// Fades and slides a single block up as it scrolls into view
export default function Reveal({ as = 'div', children, ...props }) {
    const Component = motion[as];

    return (
        <Component variants={itemVariants} initial="hidden" whileInView="visible" viewport={viewport} {...props}>
            {children}
        </Component>
    );
}

// Wraps a grid so its RevealItem children appear one after another
export function RevealGroup({ as = 'div', children, ...props }) {
    const Component = motion[as];

    return (
        <Component variants={groupVariants} initial="hidden" whileInView="visible" viewport={viewport} {...props}>
            {children}
        </Component>
    );
}

export function RevealItem({ as = 'div', children, ...props }) {
    const Component = motion[as];

    return (
        <Component variants={itemVariants} {...props}>
            {children}
        </Component>
    );
}
