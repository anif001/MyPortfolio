import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { education } from '../data/education';
import Timeline from '../components/Timeline';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-space-darker/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-[#613DC1]/3 rounded-full blur-[140px] -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] font-bold tracking-widest text-[#858AE3] bg-[#2C0735]/50 border border-[#858AE3]/10 px-3 py-1 rounded-full mb-3 uppercase">
            JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Experience & Education
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#858AE3] to-[#97DFFC] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white font-poppins mb-10 text-left border-l-4 border-[#858AE3] pl-4 uppercase tracking-wider">
              Professional Experience
            </h3>
            <Timeline items={experience} type="experience" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white font-poppins mb-10 text-left border-l-4 border-[#97DFFC] pl-4 uppercase tracking-wider">
              Academic Journey
            </h3>
            <Timeline items={education} type="education" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
