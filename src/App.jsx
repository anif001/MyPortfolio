import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Track mouse coordinates for background glow
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Track scroll events
    const handleScroll = () => {
      // 1. Scroll Progress Percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Show Back-To-Top Button
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Dynamic Loader Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#030014] z-[9999] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-poppins mb-6"
            >
              Anif<span className="text-violet-500">.</span>
            </motion.div>
            
            {/* Custom glowing progress bar */}
            <div className="w-56 h-1.5 bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen text-slate-100 selection:bg-violet-500/30 selection:text-white">
          {/* Scroll Progress Bar */}
          <div 
            className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 z-[999] transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Mouse cursor glow background layer */}
          <div 
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
            style={{
              background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.075), transparent 85%)`
            }}
          />

          {/* Navigation Bar */}
          <Navbar />

          {/* Page Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Back-To-Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-40 w-12 h-12 flex items-center justify-center rounded-xl bg-violet-600 hover:bg-violet-500 text-white shadow-[0_4px_15px_rgba(139,92,246,0.4)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.6)] border border-violet-400/20 hover:-translate-y-1 transition-all duration-300 focus:outline-none"
                aria-label="Scroll back to top"
              >
                <FaArrowUp size={16} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
