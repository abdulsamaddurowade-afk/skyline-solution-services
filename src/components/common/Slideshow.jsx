import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

// Photos that change on their own, one at a time, with arrows and dots to pick one.
// Pauses while the mouse is over it or a control has keyboard focus.
export default function Slideshow({ slides, label, interval = 4000 }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const goTo = (i) => setIndex((i + slides.length) % slides.length);

    // Load every photo up front so each one is ready when its turn comes
    useEffect(() => {
        slides.forEach(({ src }) => {
            new Image().src = src;
        });
    }, [slides]);

    // Restarts after every change, so a manual pick also gets the full time on screen
    useEffect(() => {
        if (paused) return;
        const timer = setTimeout(() => setIndex((i) => (i + 1) % slides.length), interval);
        return () => clearTimeout(timer);
    }, [index, paused, interval, slides.length]);

    const current = slides[index];

    return (
        <div
            className="slideshow"
            role="region"
            aria-roledescription="carousel"
            aria-label={label}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <AnimatePresence initial={false}>
                <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    className="slide"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                />
            </AnimatePresence>

            <span className="slide-caption">{current.category}</span>

            <button type="button" className="slide-arrow slide-prev" aria-label="Previous photo" onClick={() => goTo(index - 1)}>
                <FaChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className="slide-arrow slide-next" aria-label="Next photo" onClick={() => goTo(index + 1)}>
                <FaChevronRight aria-hidden="true" />
            </button>

            <div className="slide-dots">
                {slides.map((slide, i) => (
                    <button
                        type="button"
                        key={slide.src}
                        className={i === index ? 'active' : undefined}
                        aria-label={`Show photo ${i + 1} of ${slides.length}`}
                        aria-current={i === index ? 'true' : undefined}
                        onClick={() => goTo(i)}
                    />
                ))}
            </div>
        </div>
    );
}
