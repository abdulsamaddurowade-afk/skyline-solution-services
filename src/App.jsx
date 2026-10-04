import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import SmoothScroll from './components/common/SmoothScroll.jsx';
import Loader from './components/common/Loader.jsx';
import ScrollProgress from './components/common/ScrollProgress.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './sections/Hero.jsx';
import StatsBar from './sections/StatsBar.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Goals from './sections/Goals.jsx';
import Team from './sections/Team.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
    // A link like /#services is opened before the sections exist, so jump there once they do
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (id) document.getElementById(id)?.scrollIntoView();
    }, []);

    // reducedMotion="user" drops the slide movement for visitors who ask for less motion
    return (
        <MotionConfig reducedMotion="user">
            <SmoothScroll>
                <Loader />
                <ScrollProgress />
                <Navbar />
                <main>
                    <Hero />
                    <StatsBar />
                    <About />
                    <Services />
                    <Goals />
                    <Team />
                    <Contact />
                </main>
                <Footer />
            </SmoothScroll>
        </MotionConfig>
    );
}
