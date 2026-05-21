import React, { useState, useEffect, useMemo } from 'react';
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

function Particles({ count = 25 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1.5,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.15 + 0.04,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background: `radial-gradient(circle, rgba(133,138,227,0.4), transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity, p.opacity * 0.8, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowBackToTop(window.scrollY > 500);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(6px)", scale: 1.05 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-80 h-80 bg-[#858AE3]/8 rounded-full blur-[130px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-96 h-96 bg-[#613DC1]/5 rounded-full blur-[150px]"
            />

            <motion.div
              initial={{ filter: "blur(14px)", opacity: 0, letterSpacing: "0.4em" }}
              animate={{ filter: "blur(0px)", opacity: 1, letterSpacing: "0.12em" }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl font-bold font-poppins mb-10 relative"
            >
              <span className="bg-gradient-to-r from-[#858AE3] via-[#613DC1] to-[#97DFFC] bg-clip-text text-transparent">
                SHAIK ANIF
              </span>
              <span className="text-[#97DFFC]">.</span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] w-48 bg-gradient-to-r from-[#858AE3]/40 via-[#858AE3] to-[#97DFFC] rounded-full origin-left"
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-screen text-slate-200 selection:bg-[#858AE3]/30 selection:text-white"
        >
          <Particles />

          <div
            className="scroll-indicator"
            style={{ width: `${scrollProgress}%` }}
          />

          <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
            style={{
              background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(133, 138, 227, 0.06), transparent 85%)`
            }}
          />

          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>

          <Footer />

          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-40 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#613DC1] to-[#858AE3] hover:from-[#858AE3] hover:to-[#97DFFC] text-white shadow-[0_4px_20px_rgba(133,138,227,0.3)] hover:shadow-[0_4px_30px_rgba(133,138,227,0.5)] border border-[#858AE3]/20 hover:-translate-y-1 transition-all duration-300 focus:outline-none"
                aria-label="Scroll back to top"
              >
                <FaArrowUp size={16} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
