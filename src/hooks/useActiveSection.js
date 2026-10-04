import { useEffect, useState } from 'react';

// How far below the top of the window a section counts as "current"
const OFFSET = 150;

// Returns the id of the section currently in view, for highlighting its nav link
export default function useActiveSection(ids) {
    const [activeId, setActiveId] = useState(ids[0]);

    useEffect(() => {
        const update = () => {
            let current = ids[0];

            ids.forEach((id) => {
                const section = document.getElementById(id);
                if (section && section.getBoundingClientRect().top <= OFFSET) {
                    current = id;
                }
            });

            // At the very bottom the last section may be too short to reach the top
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                current = ids[ids.length - 1];
            }

            setActiveId(current);
        };

        // Run at most once per frame while scrolling
        let frame = 0;
        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                update();
            });
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [ids]);

    return activeId;
}
