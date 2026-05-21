import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCode, FaDatabase } from 'react-icons/fa';
import { personalInfo } from '../data/socials';

const skills = [
  { label: 'Full Stack Development', percentage: 85 },
  { label: 'Backend Development', percentage: 90 },
  { label: 'Problem Solving', percentage: 88 },
  { label: 'Spring Boot', percentage: 87 },
  { label: 'React.js', percentage: 82 },
];

function SkillBar({ label, percentage, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs sm:text-sm font-semibold text-slate-300 tracking-wide">{label}</span>
        <span className="text-[11px] font-bold text-[#858AE3]">{percentage}%</span>
      </div>
      <div className="h-[5px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#613DC1] via-[#858AE3] to-[#97DFFC]"
          style={{ boxShadow: '0 0 8px rgba(133,138,227,0.25)' }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const cards = [
    {


      id: 1,
      icon: <FaServer className="text-[#858AE3] text-2xl" />,
      title: "Backend Architectures",
      desc: "Designing secure, thread-safe REST APIs and microservices using Java and Spring Boot."
    },
    {
      id: 2,
      icon: <FaDatabase className="text-[#97DFFC] text-2xl" />,
      title: "Database Optimization",
      desc: "Building relational database schemas in PostgreSQL/MySQL with optimized indexing and transactions."
    },
    {
      id: 3,
      icon: <FaCode className="text-[#613DC1] text-2xl" />,
      title: "Full Stack Mastery",
      desc: "Combining robust backend logic with responsive, animated React interfaces."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 }
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-space-darker/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#858AE3]/3 rounded-full blur-[160px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] font-bold tracking-widest text-[#858AE3] bg-[#2C0735]/50 border border-[#858AE3]/20 px-3 py-1 rounded-full mb-3 uppercase">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Get to Know My Story
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#858AE3] to-[#97DFFC] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-white font-poppins">
              Passionate CSE Student & Software Engineer
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              {personalInfo.aboutDetailed}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              I am dedicated to writing clean, maintainable, and testable code following best practices such as Object-Oriented Design (OOD) and SOLID principles. My academic background coupled with internship experiences has equipped me to solve real-world problems and adapt rapidly to new tech stacks.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(133,138,227,0.35)" }}
                className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-[#858AE3]/20 transition-all duration-400 shadow-md hover:shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(133,138,227,0.04)]"
              >
                <span className="block text-3xl font-black text-[#858AE3] font-poppins">8.9</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">B.Tech CGPA</span>
              </motion.div>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#858AE3] mb-6 pb-3 border-b border-white/5">
                Technical Proficiency
              </h4>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <SkillBar key={skill.label} label={skill.label} percentage={skill.percentage} index={idx} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
