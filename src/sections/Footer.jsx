import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <FaGithub size={18} />;
      case 'linkedin':
        return <FaLinkedin size={18} />;
      case 'leetcode':
        return <SiLeetcode size={18} />;
      default:
        return null;
    }
  };

  const socialsList = [
    { name: 'GitHub', url: 'https://github.com/anif001' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anifshaik001/' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/anif__001/' }
  ];

  return (
    <footer className="border-t border-white/5 bg-space-darker/80 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold font-poppins">
            <span className="bg-gradient-to-r from-[#858AE3] to-[#97DFFC] bg-clip-text text-transparent">
              SHAIK ANIF
            </span>
            <span className="text-[#97DFFC]">.</span>
          </a>
          <p className="text-slate-500 text-xs mt-1.5 font-medium">
            Backend & Full Stack Engineer
          </p>
        </div>

        <div className="text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Shaik Anif. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialsList.map((soc) => (
            <a
              key={soc.name}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-[#613DC1] hover:border-[#858AE3] transition-all duration-300"
              aria-label={soc.name}
            >
              {getSocialIcon(soc.name)}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
