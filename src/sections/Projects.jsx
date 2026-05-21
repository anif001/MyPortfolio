import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../data/projects';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-space-darker/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-semibold tracking-wider text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full mb-3 uppercase">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Featured Projects
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-panel rounded-3xl border border-white/5 relative overflow-hidden flex flex-col group transition-all duration-300 hover:border-violet-500/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(139,92,246,0.1)] hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[#030014]/40 z-10 transition-opacity duration-300 group-hover:bg-[#030014]/20" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 text-left">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold text-violet-400 bg-violet-950/40 border border-violet-850/30 px-2.5 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white font-poppins mb-3 transition-colors duration-300 group-hover:text-violet-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features Checklist */}
                <div className="mb-8 flex-1">
                  <h4 className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                        <FaCheckCircle className="text-violet-400 shrink-0 mt-1" size={13} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white text-sm font-semibold transition-all duration-300 backdrop-blur-sm"
                  >
                    <FaGithub size={16} />
                    <span>Source Code</span>
                  </a>
                  
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(139,92,246,0.2)] hover:shadow-[0_4px_20px_rgba(139,92,246,0.35)]"
                    >
                      <FaExternalLinkAlt size={13} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
