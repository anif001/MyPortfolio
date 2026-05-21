import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const ease = [0.16, 1, 0.3, 1];
const springSlow = { type: "spring", stiffness: 180, damping: 22 };

function Magnetic({ children, strength = 0.15 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 12 });
  const springY = useSpring(y, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

function Hamburger({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative z-50 flex items-center justify-center w-10 h-10"
      aria-label="Toggle navigation"
    >
      <div className="relative w-5 h-4">
        <motion.span
          animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          className="absolute left-0 top-0 w-full h-[2px] bg-slate-300 rounded-full origin-center block"
          transition={{ duration: 0.35, ease }}
        />
        <motion.span
          animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="absolute left-0 top-[7px] w-full h-[2px] bg-slate-300 rounded-full block"
          transition={{ duration: 0.2 }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          className="absolute left-0 bottom-0 w-full h-[2px] bg-slate-300 rounded-full origin-center block"
          transition={{ duration: 0.35, ease }}
        />
      </div>
    </button>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 110;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="fixed top-4 left-1/2 z-50"
      >
          <div className="relative w-[92vw] max-w-5xl">
          <div
            className={`relative rounded-full border transition-all duration-700 ease-out ${
              isScrolled
                ? 'bg-[#0d0d0f]/90 backdrop-blur-2xl border-white/[0.08] py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(133,138,227,0.04)]'
                : 'bg-[#0d0d0f]/25 backdrop-blur-md border-white/[0.03] py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]'
            }`}
          >
            <div className="absolute inset-x-[25%] top-0 h-[1px] bg-gradient-to-r from-transparent via-[#858AE3]/20 to-transparent rounded-full" />
            {isScrolled && (
              <div className="absolute inset-x-[10%] bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent rounded-full" />
            )}

            <div className="relative flex items-center justify-between px-6">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="relative group select-none"
              >
                <span className="text-lg md:text-xl font-extrabold tracking-[0.15em] text-white font-poppins">
                  <span className="bg-gradient-to-r from-[#858AE3] to-[#97DFFC] bg-clip-text text-transparent">
                    SHAIK ANIF
                  </span>
                  <span className="text-[#97DFFC] font-bold">.</span>
                </span>
              </a>

              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Magnetic key={link.id} strength={0.12}>
                      <a
                        href={`#${link.id}`}
                        onClick={(e) => handleLinkClick(e, link.id)}
                        className={`group relative px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-500 ease-out ${
                          isActive
                            ? 'text-[#858AE3]'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        style={isActive ? { textShadow: '0 0 20px rgba(133,138,227,0.15)' } : undefined}
                      >
                        <span className="absolute inset-0 rounded-full bg-[#858AE3]/0 group-hover:bg-[#858AE3]/[0.04] transition-colors duration-300" />

                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'radial-gradient(circle at center, rgba(133,138,227,0.06) 0%, transparent 70%)',
                          }}
                        />

                        {link.label}

                        <span
                          className={`absolute -bottom-px left-3.5 right-3.5 h-[2px] rounded-full origin-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive
                              ? 'scale-x-100 bg-gradient-to-r from-[#858AE3] to-[#97DFFC]'
                              : 'scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-[#858AE3]/50 to-[#97DFFC]/50'
                          }`}
                          style={isActive ? { boxShadow: '0 0 8px rgba(133,138,227,0.5), 0 0 24px rgba(133,138,227,0.15), 0 0 60px rgba(133,138,227,0.05)' } : undefined}
                        />
                      </a>
                    </Magnetic>
                  );
                })}

              </div>

              <div className="md:hidden">
                <Hamburger open={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, scale: 0.94, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -20 }}
              transition={{ duration: 0.35, ease }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm md:hidden rounded-2xl border border-white/[0.06] shadow-2xl overflow-hidden"
              style={{
                background: 'rgba(13, 13, 15, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 h-16 bg-[#858AE3]/10 rounded-full blur-3xl" />

              <div className="relative px-4 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4, ease }}
                      className={`relative flex items-center py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                        isActive
                          ? 'bg-[#858AE3]/10 text-[#858AE3] border-l-[3px] border-[#858AE3]'
                          : 'text-slate-400 hover:text-white hover:bg-white/[0.03] border-l-[3px] border-transparent'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="mobileActiveIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-gradient-to-b from-[#858AE3] to-[#97DFFC] rounded-r-full"
                          style={{ boxShadow: '0 0 6px rgba(133,138,227,0.3)' }}
                          transition={springSlow}
                        />
                      )}
                      <span className="ml-2">{link.label}</span>
                    </motion.a>
                  );
                })}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
