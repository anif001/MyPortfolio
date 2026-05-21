import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function Timeline({ items, type }) {
  const isExperience = type === 'experience';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative border-l-2 border-dashed border-violet-500/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 py-4"
    >
      {items.map((item, idx) => {
        // Normalize properties depending on type
        const title = isExperience ? item.role : item.institution;
        const subtitle = isExperience ? item.company : item.degree;
        const scoreOrTags = isExperience ? item.tags : item.score;
        const period = item.period;
        const description = item.description;

        return (
          <motion.div 
            key={item.id || idx} 
            variants={itemVariants}
            className="relative"
          >
            {/* Dot Node Indicator */}
            <span className="absolute -left-[45px] md:-left-[61px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-violet-500/50 text-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.3)] hover:scale-110 transition-transform duration-300">
              {isExperience ? <FaBriefcase className="text-xs" /> : <FaGraduationCap className="text-sm" />}
            </span>

            {/* Glowing Accent for active node */}
            <span className="absolute -left-[41px] md:-left-[57px] top-2.5 w-6 h-6 rounded-full bg-violet-600/30 animate-ping -z-10" />

            {/* Timeline Card */}
            <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/10 transition-all duration-300" />
              
              {/* Date Header */}
              <span className="inline-block text-xs font-semibold tracking-wider text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full mb-4">
                {period}
              </span>

              {/* Title & Subtitle */}
              <h3 className="text-xl md:text-2xl font-bold text-white font-poppins mb-1">
                {title}
              </h3>
              <p className="text-slate-300 font-medium text-sm md:text-base mb-4">
                {subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                {description}
              </p>

              {/* Badges or Score */}
              {isExperience ? (
                <div className="flex flex-wrap gap-2">
                  {scoreOrTags && scoreOrTags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-xs font-semibold text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg hover:border-violet-500/30 hover:bg-violet-950/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="inline-block text-sm font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                  {scoreOrTags}
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
