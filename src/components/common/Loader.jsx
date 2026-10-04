import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

const MIN_VISIBLE_MS = 900;  // Avoids a flash when everything is already cached
const MAX_WAIT_MS = 5000;    // Never keep visitors waiting on a slow image
const FADE_MS = 500;         // Matches the .loader transition in global.css

// Full-screen startup screen shown until the page (images included) has loaded
export default function Loader() {
    const [phase, setPhase] = useState('loading'); // loading -> hiding -> done
    const lenis = useLenis();

    useEffect(() => {
        const startedAt = performance.now();
        let minTimer;

        const hide = () => {
            const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - startedAt));
            minTimer = setTimeout(() => setPhase('hiding'), remaining);
        };

        if (document.readyState === 'complete') {
            hide();
        } else {
            window.addEventListener('load', hide, { once: true });
        }
        const maxTimer = setTimeout(() => setPhase('hiding'), MAX_WAIT_MS);

        return () => {
            window.removeEventListener('load', hide);
            clearTimeout(minTimer);
            clearTimeout(maxTimer);
        };
    }, []);

    // Remove the loader from the page once it has faded out
    useEffect(() => {
        if (phase !== 'hiding') return;
        const timer = setTimeout(() => setPhase('done'), FADE_MS);
        return () => clearTimeout(timer);
    }, [phase]);

    // Keep the page from scrolling behind the loader
    useEffect(() => {
        if (phase !== 'loading') return;
        document.documentElement.style.overflow = 'hidden';
        lenis?.stop();
        return () => {
            document.documentElement.style.overflow = '';
            lenis?.start();
        };
    }, [phase, lenis]);

    if (phase === 'done') return null;

    return (
        <div className={`loader${phase === 'hiding' ? ' loader-hidden' : ''}`} role="status" aria-label="Loading">
            <div className="logo">
                <span className="skyline-text">SKYLINE</span> <span className="solution-text">SOLUTION</span>
            </div>
            <div className="loader-bar"><span></span></div>
        </div>
    );
}
