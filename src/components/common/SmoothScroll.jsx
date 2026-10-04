import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

// Visitors who ask their device for reduced motion keep normal scrolling
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function SmoothScroll({ children }) {
    if (prefersReducedMotion) return children;

    // "anchors" makes links like #services glide to their section
    return <ReactLenis root options={{ anchors: true }}>{children}</ReactLenis>;
}
