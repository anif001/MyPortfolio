import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

function SkillTag({ skill }) {
  const IconComponent = skill.icon;

  return (
    <motion.span
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:border-[#858AE3]/30 hover:bg-[#2C0735]/40 hover:shadow-[0_0_15px_rgba(133,138,227,0.06)] transition-all duration-400 cursor-default select-none"
    >
      {IconComponent && (
        <IconComponent size={14} style={{ color: skill.brandColor }} />
      )}
      <span className="text-[11px] font-semibold tracking-wide">{skill.name}</span>
    </motion.span>
  );
}

function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="glass-panel rounded-2xl border border-white/5 p-6 flex flex-col transition-all duration-500 hover:border-[#858AE3]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.75),0_0_40px_rgba(133,138,227,0.05)]"
    >
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#858AE3] mb-4 pb-3 border-b border-white/5">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <SkillTag key={idx} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-space-darker/20">
      <div className="absolute top-1/4 left-1/12 w-[350px] h-[350px] bg-[#858AE3]/6 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 right-1/12 w-[350px] h-[350px] bg-[#97DFFC]/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] font-bold tracking-widest text-[#858AE3] bg-[#2C0735]/40 border border-[#858AE3]/20 px-3 py-1 rounded-full mb-3 uppercase">
            SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            My Technical Arsenal
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#858AE3] to-[#97DFFC] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <CategoryCard key={category.id} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
