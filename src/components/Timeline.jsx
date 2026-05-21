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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 17 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative border-l border-dashed border-[#858AE3]/20 ml-4 md:ml-6 pl-8 md:pl-10 space-y-10 py-2"
    >
      {items.map((item, idx) => {
        const title = isExperience ? item.role : item.institution;
        const subtitle = isExperience ? item.company : item.degree;
        const scoreOrTags = isExperience ? item.tags : item.score;
        const period = item.period;
        const description = item.description;

        return (
          <motion.div
            key={item.id || idx}
            variants={itemVariants}
            className="relative text-left"
          >
            <span className="absolute -left-[45px] md:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border border-[#858AE3]/40 text-[#858AE3] shadow-[0_0_12px_rgba(133,138,227,0.15)] hover:scale-105 transition-transform duration-300 z-10 select-none">
              {isExperience ? <FaBriefcase size={12} /> : <FaGraduationCap size={14} />}
            </span>

            <span className="absolute -left-[41px] md:-left-[47px] top-2.5 w-6 h-6 rounded-full bg-[#613DC1]/10 animate-ping -z-10" />

            <div className="glass-panel glass-panel-hover p-6 md:p-7 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#858AE3]/2 rounded-full blur-2xl pointer-events-none group-hover:bg-[#858AE3]/5 transition-all duration-300" />

              <span className="inline-block text-[10px] font-bold tracking-wider text-[#858AE3] bg-[#2C0735]/50 border border-[#858AE3]/10 px-3 py-1 rounded-full mb-3.5 uppercase">
                {period}
              </span>

              <h4 className="text-lg md:text-xl font-bold text-white font-poppins mb-1">
                {title}
              </h4>
              <p className="text-slate-400 font-bold text-xs sm:text-sm mb-4 tracking-wide">
                {subtitle}
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                {description}
              </p>

              {isExperience ? (
                <div className="flex flex-wrap gap-2">
                  {scoreOrTags && scoreOrTags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[10px] font-bold text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg hover:border-[#858AE3]/20 hover:bg-[#2C0735]/40 transition-all duration-200 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="inline-block text-[11px] font-bold text-[#97DFFC] bg-[#2C0735]/65 border border-[#97DFFC]/15 px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(151,223,252,0.05)] uppercase tracking-wider">
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
