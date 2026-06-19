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
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 17 }
    }
  };

  const codingProfiles = [
    {
      name: "GitHub",
      handle: "@anif001",
      desc: "Source code repositories, backend pipelines, and open-source contributions.",
      url: "https://github.com/anif001",
      icon: <FaGithub size={28} />,
      color: "group-hover:text-white",
      glow: "group-hover:shadow-[0_0_25px_rgba(255,255,255,0.12)] group-hover:border-white/20"
    },
    {
      name: "LinkedIn",
      handle: "Shaik Anif",
      desc: "Professional networking, corporate connections, and career updates.",
      url: "https://www.linkedin.com/in/anifshaik001/",
      icon: <FaLinkedin size={28} />,
      color: "group-hover:text-[#0077b5]",
      glow: "group-hover:shadow-[0_0_25px_rgba(0,119,181,0.12)] group-hover:border-[#0077b5]/30"
    },
    {
      name: "LeetCode",
      handle: "anif__001",
      desc: "Competitive programming, algorithms, and data structure problem solving.",
      url: "https://leetcode.com/u/anif__001/",
      icon: <SiLeetcode size={28} />,
      color: "group-hover:text-[#ffa116]",
      glow: "group-hover:shadow-[0_0_25px_rgba(255,161,22,0.12)] group-hover:border-[#ffa116]/30"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-space-darker/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] font-bold tracking-widest text-[#858AE3] bg-[#2C0735]/50 border border-[#858AE3]/10 px-3 py-1 rounded-full mb-3 uppercase">
            CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Certifications & Profiles
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#858AE3] to-[#97DFFC] rounded-full mt-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex gap-5 items-start text-left group"
            >
              <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl text-[#858AE3] group-hover:bg-[#2C0735]/50 group-hover:border-[#858AE3]/30 transition-all duration-300 shrink-0">
                <FaCertificate size={22} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="text-base sm:text-lg font-bold text-white font-poppins group-hover:text-[#858AE3] transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-500 tracking-wider bg-white/5 px-2.5 py-1 rounded-md shrink-0 uppercase select-none">
                    {cert.date}
                  </span>
                </div>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-wider mb-2.5">
                  Issuer: {cert.issuer}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col items-center mb-10 text-center select-none">
          <h3 className="text-lg font-bold tracking-wider uppercase text-slate-400 font-poppins">
            Coding Profiles & Platforms
          </h3>
          <div className="w-8 h-[1px] bg-[#858AE3]/40 rounded-full mt-3.5" />
        </div>

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
              className={`glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.015] ${prof.glow}`}
            >
              <div className={`p-4 bg-white/5 border border-white/5 rounded-2xl text-slate-400 mb-5 transition-all duration-300 group-hover:bg-slate-950/80 ${prof.color}`}>
                {prof.icon}
              </div>

              <h4 className="text-lg font-bold text-white font-poppins mb-1">
                {prof.name}
              </h4>
              <p className="text-xs font-bold text-[#858AE3] tracking-wider uppercase mb-4">
                {prof.handle}
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1 font-medium">
                {prof.desc}
              </p>

              <a
                href={prof.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white/5 hover:bg-[#613DC1] border border-white/5 hover:border-[#858AE3] text-slate-300 hover:text-white rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-[0_4px_15px_rgba(133,138,227,0.15)]"
              >
                <span>Visit Profile</span>
                <FaExternalLinkAlt size={9} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
