import React from 'react';
import { experience } from '../data/experience';
import { education } from '../data/education';
import Timeline from '../components/Timeline';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-[#05021a]/20 grid-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-semibold tracking-wider text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full mb-3 uppercase">
            JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Experience & Education
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Timelines Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white font-poppins mb-10 text-left border-l-4 border-violet-500 pl-4">
              Professional Experience
            </h3>
            <Timeline items={experience} type="experience" />
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white font-poppins mb-10 text-left border-l-4 border-indigo-500 pl-4">
              Academic Journey
            </h3>
            <Timeline items={education} type="education" />
          </div>
        </div>
      </div>
    </section>
  );
}
