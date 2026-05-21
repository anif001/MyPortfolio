import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCode, FaDatabase } from 'react-icons/fa';
import { personalInfo } from '../data/socials';

export default function About() {
  const cards = [
    {
      id: 1,
      icon: <FaServer className="text-violet-400 text-3xl" />,
      title: "Backend Architectures",
      desc: "Designing secure, thread-safe REST APIs and microservices using Java and Spring Boot."
    },
    {
      id: 2,
      icon: <FaDatabase className="text-indigo-400 text-3xl" />,
      title: "Database Optimization",
      desc: "Building relational database schemas in PostgreSQL/MySQL with optimized indexing and transactions."
    },
    {
      id: 3,
      icon: <FaCode className="text-fuchsia-400 text-3xl" />,
      title: "Full Stack Mastery",
      desc: "Combining robust backend logic with responsive, animated React interfaces."
    }
  ];

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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-space-darker/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-semibold tracking-wider text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full mb-3 uppercase">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Get to Know My Story
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Paragraph */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-white font-poppins">
              Passionate CSE Student & Software Engineer
            </h3>
            
            <p className="text-slate-350 text-base md:text-lg leading-relaxed">
              {personalInfo.aboutDetailed}
            </p>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              I am dedicated to writing clean, maintainable, and testable code following best practices such as Object-Oriented Design (OOD) and SOLID principles. My academic background coupled with internship experiences has equipped me to solve real-world problems and adapt rapidly to new tech stacks.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-violet-500/20 transition-all duration-300">
                <span className="block text-3xl font-extrabold text-violet-400">8.9</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">B.Tech CGPA</span>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-violet-500/20 transition-all duration-300">
                <span className="block text-3xl font-extrabold text-indigo-400">98%</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Intermediate MPC</span>
              </div>
            </div>
          </motion.div>

          {/* Cards Stack */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-1 gap-6"
          >
            {cards.map((card) => (
              <motion.div 
                key={card.id} 
                variants={itemVariants}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex gap-6 items-start text-left group"
              >
                <div className="p-3 bg-white/5 border border-white/5 rounded-xl group-hover:bg-violet-950/20 group-hover:border-violet-500/30 transition-colors duration-300">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white font-poppins mb-1.5 group-hover:text-violet-300 transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
