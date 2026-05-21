import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { certifications } from '../data/certifications';

export default function Certifications() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const codingProfiles = [
    {
      name: "GitHub",
      handle: "@shaik-anif",
      desc: "Source code repositories, backend pipelines, and open-source contributions.",
      url: "https://github.com/anif001",
      icon: <FaGithub size={32} />,
      color: "group-hover:text-emerald-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] group-hover:border-emerald-500/30"
    },
    {
      name: "LinkedIn",
      handle: "shaik-anif",
      desc: "Professional networking, updates, and corporate connections.",
      url: "https://www.linkedin.com/in/anifshaik001/",
      icon: <FaLinkedin size={32} />,
      color: "group-hover:text-blue-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.15)] group-hover:border-blue-500/30"
    },
    {
      name: "LeetCode",
      handle: "shaik-anif",
      desc: "Competitive programming, algorithms, and data structure problem solving.",
      url: "https://leetcode.com/u/anif__001/",
      icon: <SiLeetcode size={32} />,
      color: "group-hover:text-amber-500",
      glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] group-hover:border-amber-500/30"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-space-darker/40">
      <div className="max-w-7xl mx-auto">
        {/* Certificates Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-semibold tracking-wider text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full mb-3 uppercase">
            CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Certifications & Profiles
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border border-white/5 flex gap-6 items-start text-left group"
            >
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-violet-400 group-hover:bg-violet-950/20 group-hover:border-violet-500/30 transition-colors duration-300">
                <FaCertificate size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white font-poppins group-hover:text-violet-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-500 tracking-wider bg-white/5 px-2.5 py-1 rounded-md">
                    {cert.date}
                  </span>
                </div>
                <p className="text-slate-400 font-medium text-xs md:text-sm uppercase tracking-wider mb-3">
                  Issuer: {cert.issuer}
                </p>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coding Profiles Heading */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className="text-2xl font-bold text-white font-poppins">
            Coding Profiles & Platforms
          </h3>
          <div className="w-10 h-[2px] bg-violet-500/50 rounded-full mt-3" />
        </div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {codingProfiles.map((prof, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.04] ${prof.glow}`}
            >
              {/* Icon */}
              <div className={`p-4 bg-white/5 border border-white/5 rounded-2xl text-slate-400 mb-6 transition-all duration-300 group-hover:bg-slate-950/80 ${prof.color}`}>
                {prof.icon}
              </div>

              {/* Title & Handle */}
              <h4 className="text-xl font-bold text-white font-poppins mb-1">
                {prof.name}
              </h4>
              <p className="text-sm font-semibold text-violet-400 tracking-wide mb-4">
                {prof.handle}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {prof.desc}
              </p>

              {/* Link */}
              <a
                href={prof.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white/5 hover:bg-violet-600 border border-white/5 hover:border-violet-500 text-slate-300 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-[0_4px_15px_rgba(139,92,246,0.2)]"
              >
                <span>Visit Profile</span>
                <FaExternalLinkAlt size={10} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
