import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { FaArrowUp } from 'react-icons/fa6';

// How far down the page before the button appears
const SHOW_AFTER_PX = 400;

// How long the glide back to the top takes
const SCROLL_SECONDS = 2.5;

// Starts gently, keeps a steady pace, then slows into the top (Lenis' default rushes the first half second)
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Round arrow button in the bottom-right corner that glides back to the top
export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const goToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: SCROLL_SECONDS, easing: easeInOut });
        } else {
            // Visitors who ask their device for reduced motion get a plain jump
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    className="back-to-top"
                    aria-label="Back to top"
                    onClick={goToTop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.25 }}
                >
                    <FaArrowUp aria-hidden="true" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
