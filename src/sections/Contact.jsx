import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaUser, FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationTriangle, FaDownload } from 'react-icons/fa';
import { contactConfig, personalInfo } from '../data/socials';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch(contactConfig.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage('Something went wrong. Please try again or email me directly.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Failed to connect to the server. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-space-darker/30">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#613DC1]/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#4E148C]/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] font-bold tracking-widest text-[#858AE3] bg-[#2C0735]/50 border border-[#858AE3]/10 px-3 py-1 rounded-full mb-3 uppercase">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Contact Me
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#858AE3] to-[#97DFFC] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-white font-poppins">
              Let's build something amazing together!
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              Whether you want to discuss a new project, query about an internship, or just want to say hi, feel free to drop a message. I'm always open to discussing backend architectures, full-stack pipelines, and software engineering opportunities!
            </p>

            <div className="space-y-6 pt-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-xl text-[#858AE3]">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">EMAIL ME DIRECTLY</span>
                  <a href={`mailto:${personalInfo.contactEmail}`} className="text-slate-200 hover:text-[#858AE3] transition-colors duration-300 font-medium text-base sm:text-lg">
                    {personalInfo.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/5 relative hover:border-white/[0.07] transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">

                <AnimatePresence mode="wait">
                  {status && status !== 'loading' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl border flex gap-3 text-left ${
                        status === 'success'
                          ? 'bg-emerald-950/30 border-emerald-500/20 text-emerald-300'
                          : 'bg-rose-950/30 border-rose-500/20 text-rose-300'
                      }`}
                    >
                      {status === 'success' ? (
                        <FaCheckCircle className="shrink-0 mt-1" size={18} />
                      ) : (
                        <FaExclamationTriangle className="shrink-0 mt-1" size={18} />
                      )}
                      <p className="text-sm font-medium">{statusMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-400 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-slate-500">
                      <FaUser size={16} />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name..."
                       className={`w-full bg-space-darker/60 border rounded-xl py-3 pl-12 pr-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all duration-400 ${
                         errors.name ? 'border-rose-500/50 focus:ring-rose-500' : 'border-white/5 focus:ring-[#858AE3] focus:border-[#858AE3]/50'
                       }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-rose-400 text-xs font-medium mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-400 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-slate-500">
                      <FaEnvelope size={16} />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="anif@example.com"
                       className={`w-full bg-space-darker/60 border rounded-xl py-3 pl-12 pr-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all duration-400 ${
                         errors.email ? 'border-rose-500/50 focus:ring-rose-500' : 'border-white/5 focus:ring-[#858AE3] focus:border-[#858AE3]/50'
                       }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-rose-400 text-xs font-medium mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div className="text-left">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Anif, I'd love to chat about..."
                     className={`w-full bg-space-darker/60 border rounded-xl py-3 px-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all duration-400 resize-none ${
                       errors.message ? 'border-rose-500/50 focus:ring-rose-500' : 'border-white/5 focus:ring-[#858AE3] focus:border-[#858AE3]/50'
                     }`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs font-medium mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-[#613DC1] to-[#858AE3] hover:from-[#858AE3] hover:to-[#97DFFC] disabled:from-slate-800 disabled:to-slate-800 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-400 shadow-[0_4px_20px_rgba(133,138,227,0.2)] hover:shadow-[0_6px_35px_rgba(133,138,227,0.45)] disabled:shadow-none hover:-translate-y-[3px] disabled:translate-y-0 hover:scale-[1.01]"
                >
                  {status === 'loading' ? (
                    <>
                      <FaSpinner className="animate-spin" size={16} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12"
        >
          <div className="glass-panel rounded-2xl border border-white/5 p-6 sm:p-7 group transition-all duration-500 hover:border-[#858AE3]/15 hover:shadow-[0_15px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(133,138,227,0.03)]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#858AE3]/2 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#858AE3] mb-2">Download Resume</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium mb-5">
              Get a detailed overview of my experience, skills, and achievements.
            </p>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#613DC1] to-[#858AE3] hover:from-[#858AE3] hover:to-[#97DFFC] text-white text-xs font-bold uppercase tracking-wider transition-all duration-400 shadow-[0_0_15px_rgba(133,138,227,0.12)] hover:shadow-[0_0_30px_rgba(133,138,227,0.3)] hover:-translate-y-[2px] hover:scale-[1.02]"
            >
              <FaDownload size={13} />
              <span>Download PDF</span>
            </a>
          </div>

          <div className="glass-panel rounded-2xl border border-white/5 p-6 sm:p-7 group transition-all duration-500 hover:border-[#858AE3]/15 hover:shadow-[0_15px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(133,138,227,0.03)]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#97DFFC]/2 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#97DFFC] mb-4">Quick Info</h4>
            <div className="space-y-3.5">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Location</span>
                <span className="text-[13px] font-semibold text-[#97DFFC]">Remote / Flexible</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Availability</span>
                <span className="text-[13px] font-semibold text-[#858AE3]">Open to opportunities</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Response Time</span>
                <span className="text-[13px] font-semibold text-[#97DFFC]">Within 24 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
