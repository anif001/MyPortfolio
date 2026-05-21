import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/socials';
import profileImg from '../assets/myimage.jpeg';

// Typing effect helper
const TypingEffect = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 60;
  const pauseTime = 2000;

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="relative">
      <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
        {currentText}
      </span>
      <span className="ml-1 inline-block w-[3px] h-[1.1em] bg-violet-400 animate-pulse align-middle" />
    </span>
  );
};

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <FaGithub size={22} />;
      case 'linkedin':
        return <FaLinkedin size={22} />;
      case 'leetcode':
        return <SiLeetcode size={22} />;
      default:
        return null;
    }
  };

  const socialsList = [
    { name: 'GitHub', url: 'https://github.com/anif001', hoverColor: 'hover:text-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anifshaik001/', hoverColor: 'hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/anif__001/', hoverColor: 'hover:text-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]' }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 md:pt-36 flex items-center relative overflow-hidden px-6 grid-bg"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-violet-400 bg-violet-950/40 border border-violet-800/30 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.1)]">
            WELCOME TO MY PORTFOLIO
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-poppins">
            Hi, I'm <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300">
            I am a <TypingEffect words={personalInfo.typingRoles} />
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            {personalInfo.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.5)] hover:-translate-y-0.5"
            >
              View Projects
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-slate-900/50 hover:bg-slate-800/60 text-slate-200 hover:text-white font-semibold rounded-xl border border-white/10 hover:border-violet-500/35 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            >
              Contact Me
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
             
             className="w-full sm:w-auto text-center px-8 py-3.5 bg-violet-950/20 hover:bg-violet-900/30 text-violet-300 hover:text-violet-200 font-semibold rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              download
            >

              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-6">
            <span className="text-sm font-semibold text-slate-500 tracking-wider">CONNECT:</span>
            <div className="flex items-center gap-3">
              {socialsList.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 transition-all duration-300 hover:bg-slate-950/80 hover:-translate-y-1 ${soc.hoverColor}`}
                  aria-label={soc.name}
                >
                  {getSocialIcon(soc.name)}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group animate-float">
            {/* Pulsing glow ring backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-glow-slow" />
            
            {/* Main glass frame */}
            <div className="absolute inset-1.5 rounded-full bg-slate-950/80 backdrop-blur-xl border border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Profile Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5">
                <img 
                  src={profileImg} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            {/* Glowing active outline border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full -z-10 opacity-70 group-hover:opacity-100 blur-[2px] transition-all duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
