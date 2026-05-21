import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 4, y: y * -4 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.08s ease-out',
      }}
      whileHover={{ y: -6 }}
      className="glass-panel rounded-2xl border border-white/5 relative overflow-hidden flex flex-col group transition-all duration-500 hover:border-[#858AE3]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(133,138,227,0.04)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]/30 z-10 transition-opacity duration-300 group-hover:bg-[#050505]/10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-darker/80 via-transparent to-transparent z-10" />

        <div className="absolute inset-x-0 bottom-0 z-20 p-4 pt-8 bg-gradient-to-t from-space-darker/90 via-space-darker/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={12} />
              <span>Source</span>
            </a>
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-[#613DC1] to-[#858AE3] hover:from-[#858AE3] hover:to-[#97DFFC] text-white text-[10px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_12px_rgba(133,138,227,0.15)]"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={10} />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 text-left">
        <h3 className="text-sm sm:text-base font-bold text-white font-poppins mb-1.5 transition-colors duration-300 group-hover:text-[#858AE3] leading-snug">
          {project.title}
        </h3>

        <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed mb-3 font-medium line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[9px] font-bold text-[#858AE3] bg-[#2C0735]/40 border border-[#613DC1]/20 px-2 py-0.5 rounded-md uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-space-darker/40">
      <div className="absolute top-1/3 left-1/10 w-[450px] h-[450px] bg-[#858AE3]/4 rounded-full blur-[160px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] bg-[#97DFFC]/4 rounded-full blur-[160px] -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] font-bold tracking-widest text-[#858AE3] bg-[#2C0735]/40 border border-[#858AE3]/20 px-3 py-1 rounded-full mb-3 uppercase">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Featured Projects
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#858AE3] to-[#97DFFC] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
