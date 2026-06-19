import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/socials';
import profileImg from '../assets/myimage.jpeg';

const TypingEffect = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 90;
  const deletingSpeed = 50;
  const pauseTime = 2500;

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
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 50);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="relative font-bold">
      <span className="bg-gradient-to-r from-[#858AE3] via-[#613DC1] to-[#97DFFC] bg-clip-text text-transparent">
        {currentText}
      </span>
      <span className="ml-1 inline-block w-[3px] h-[1.1em] bg-[#858AE3] animate-pulse align-middle" />
    </span>
  );
};

function TiltImageContainer({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer transition-all duration-300 ease-out"
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 110;
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
        return <FaGithub size={20} />;
      case 'linkedin':
        return <FaLinkedin size={20} />;
      case 'leetcode':
        return <SiLeetcode size={20} />;
      default:
        return null;
    }
  };

  const socialsList = [
    { name: 'GitHub', url: 'https://github.com/anif001', hoverColor: 'hover:text-white hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anifshaik001/', hoverColor: 'hover:text-[#858AE3] hover:border-[#858AE3]/30 hover:shadow-[0_0_15px_rgba(133,138,227,0.2)]' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/anif__001/', hoverColor: 'hover:text-[#97DFFC] hover:border-[#97DFFC]/30 hover:shadow-[0_0_15px_rgba(151,223,252,0.2)]' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden px-6"
    >
      <div className="absolute top-1/4 left-1/12 w-[400px] h-[400px] bg-[#858AE3]/6 rounded-full blur-[150px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/12 w-[450px] h-[450px] bg-[#97DFFC]/4 rounded-full blur-[150px] -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#613DC1]/4 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-[#858AE3] bg-[#2C0735]/40 border border-[#858AE3]/20 rounded-full shadow-[0_0_12px_rgba(133,138,227,0.05)] uppercase"
          >
            Backend & Full-Stack Architect
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-poppins leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#858AE3] via-[#613DC1] to-[#97DFFC] bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-slate-300"
          >
            Specialized in <TypingEffect words={personalInfo.typingRoles} />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="w-full sm:w-auto text-center px-7 py-3 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#613DC1] to-[#858AE3] hover:from-[#858AE3] hover:to-[#97DFFC] text-white rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(133,138,227,0.2)] hover:shadow-[0_4px_25px_rgba(133,138,227,0.4)] hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-7 py-3 text-xs font-bold uppercase tracking-wider bg-transparent text-slate-300 hover:text-white rounded-full border border-white/10 hover:border-[#858AE3]/50 transition-all duration-300 hover:-translate-y-0.5"
              download
            >
              Download Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="w-full sm:w-auto text-center px-7 py-3 text-xs font-bold uppercase tracking-wider bg-slate-900/40 hover:bg-slate-800/60 text-[#858AE3] hover:text-[#97DFFC] rounded-full border border-[#858AE3]/20 hover:border-[#858AE3]/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-6"
          >
            <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Connect:</span>
            <div className="flex items-center gap-3">
              {socialsList.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-slate-400 transition-all duration-300 hover:bg-slate-950/90 hover:-translate-y-1 ${soc.hoverColor}`}
                  aria-label={soc.name}
                >
                  {getSocialIcon(soc.name)}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0"
        >
          <TiltImageContainer>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-[#613DC1] via-[#858AE3] to-[#97DFFC] rounded-full blur-2xl opacity-25 group-hover:opacity-45 transition-opacity duration-500 animate-glow-slow" />

              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#858AE3] via-[#97DFFC] to-[#613DC1] rounded-full opacity-60 group-hover:opacity-100 blur-[2px] transition-all duration-500 animate-pulse-slow" />

              <div
                style={{ transform: "translateZ(30px)" }}
                className="absolute inset-0.5 rounded-full bg-space-darker/90 backdrop-blur-xl border border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)]"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5 pointer-events-none" />
                </div>
              </div>
            </div>
          </TiltImageContainer>
        </motion.div>
      </div>
    </section>
  );
}
