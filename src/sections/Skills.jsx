import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Helper to assign a nice gradient/shadow color scheme based on category
  const getCategoryTheme = (id) => {
    switch (id) {
      case 'languages':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30',
          title: 'from-blue-400 to-indigo-400',
          badge: 'hover:border-blue-500/30 hover:bg-blue-950/20 hover:text-blue-300'
        };
      case 'backend':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] group-hover:border-violet-500/30',
          title: 'from-violet-400 to-fuchsia-400',
          badge: 'hover:border-violet-500/30 hover:bg-violet-950/20 hover:text-violet-300'
        };
      case 'frontend':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] group-hover:border-pink-500/30',
          title: 'from-pink-400 to-rose-400',
          badge: 'hover:border-pink-500/30 hover:bg-pink-950/20 hover:text-pink-300'
        };
      case 'database':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/30',
          title: 'from-emerald-400 to-teal-400',
          badge: 'hover:border-emerald-500/30 hover:bg-emerald-950/20 hover:text-emerald-300'
        };
      case 'tools':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] group-hover:border-amber-500/30',
          title: 'from-amber-400 to-orange-400',
          badge: 'hover:border-amber-500/30 hover:bg-amber-950/20 hover:text-amber-300'
        };
      default:
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] group-hover:border-violet-500/30',
          title: 'from-violet-400 to-indigo-400',
          badge: 'hover:border-violet-500/30 hover:bg-violet-950/20 hover:text-violet-300'
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-[#05021a]/20 grid-bg">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-violet-900/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-indigo-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-semibold tracking-wider text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full mb-3 uppercase">
            SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            My Technical Arsenal
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => {
            const theme = getCategoryTheme(cat.id);

            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                className={`glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:bg-white/[0.04] ${theme.glow}`}
              >
                {/* Decorative glowing card gradient accent */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-all duration-300" />
                
                {/* Category Header */}
                <h3 className={`text-xl font-bold font-poppins mb-6 bg-gradient-to-r bg-clip-text text-transparent ${theme.title} text-left`}>
                  {cat.title}
                </h3>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-sm font-medium text-slate-300 bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-xl transition-all duration-300 hover:scale-105 ${theme.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
