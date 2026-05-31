'use client';
import { useState } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import Image from 'next/image';

const ContactFormSection = () => {
  const [inquiryType, setInquiryType] = useState('General Inquiry');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    { id: 'Membership Support', label: 'Member Support', icon: '👤' },
    { id: 'Events & Reunions', label: 'Events & Reunions', icon: '📅' },
    { id: 'Donations', label: 'Donations & Giving', icon: '💝' },
    { id: 'General Inquiry', label: 'General Inquiry', icon: '✉️' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section className="py-16 bg-white dark:bg-background-8">
      <div className="main-container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LHS: 5 Columns - Contact Info, Categories, Socials */}
          <div className="lg:col-span-5 space-y-10">
            {/* Quick Contact Categories */}
            <RevealAnimation delay={0.1}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-5 border-l-2 border-secondary pl-3">
                  Inquiry Topic
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setInquiryType(cat.id)}
                      className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-300 ${
                        inquiryType === cat.id
                          ? 'border-secondary bg-secondary/5 text-secondary dark:border-secondary dark:bg-secondary/5 dark:text-secondary shadow-md shadow-secondary/5'
                          : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 dark:border-background-5 dark:bg-background-7 dark:hover:bg-background-6 text-black/70 dark:text-white/70 hover:shadow-sm'
                      }`}
                    >
                      <span className="text-2xl mb-2">{cat.icon}</span>
                      <span className="text-xs font-extrabold leading-tight tracking-wide">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </RevealAnimation>

            {/* Address, Email, Phone List */}
            <div className="space-y-6 bg-white dark:bg-background-7 p-6 rounded-[24px] border border-gray-100 dark:border-background-5 shadow-lg relative overflow-hidden">
              <RevealAnimation delay={0.2} direction="up">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-secondary/10 dark:bg-[#d4af37]/10 flex items-center justify-center text-secondary dark:text-[#d4af37] shrink-0 border border-secondary/10 dark:border-[#d4af37]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 dark:text-white/40">Email Us</div>
                    <div className="text-sm font-bold text-black dark:text-white hover:text-secondary dark:hover:text-[#d4af37] transition-colors cursor-pointer">info@fgceosa.org</div>
                  </div>
                </div>
              </RevealAnimation>

              <div className="h-px bg-gray-100 dark:bg-background-5"></div>

              <RevealAnimation delay={0.3} direction="up">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-secondary/10 dark:bg-[#d4af37]/10 flex items-center justify-center text-secondary dark:text-[#d4af37] shrink-0 border border-secondary/10 dark:border-[#d4af37]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 dark:text-white/40">Call Us</div>
                    <div className="text-sm font-bold text-black dark:text-white hover:text-secondary dark:hover:text-[#d4af37] transition-colors cursor-pointer">+234 (0) 800 123 4567</div>
                  </div>
                </div>
              </RevealAnimation>

              <div className="h-px bg-gray-100 dark:bg-background-5"></div>

              <RevealAnimation delay={0.4} direction="up">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-secondary/10 dark:bg-[#d4af37]/10 flex items-center justify-center text-secondary dark:text-[#d4af37] shrink-0 border border-secondary/10 dark:border-[#d4af37]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 dark:text-white/40">Office Address</div>
                    <div className="text-sm font-bold text-black dark:text-white">123 Alumni Way, Enugu, Nigeria</div>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Trust Section */}
            <RevealAnimation delay={0.45}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-background-7 dark:to-background-6 border border-gray-150 dark:border-background-5 text-center shadow-inner">
                <p className="text-xs text-black/70 dark:text-white/70 mb-1.5 font-bold">
                  🤝 Trusted by thousands of FGCE alumni worldwide
                </p>
                <p className="text-[11px] text-secondary dark:text-[#d4af37] font-extrabold uppercase tracking-wider">
                  Guaranteed response within 24–72 hours
                </p>
              </div>
            </RevealAnimation>

          </div>

          {/* RHS: 7 Columns - Redesigned appealing Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-background-7 p-8 md:p-12 rounded-[32px] border border-gray-100 dark:border-background-5 shadow-2xl relative overflow-hidden">
            {/* Subtle glow background element */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none"></div>
            
            <RevealAnimation delay={0.2} direction="right">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="size-16 rounded-full bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white">Message Sent!</h3>
                  <p className="text-sm text-black/60 dark:text-white/60 max-w-sm">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-secondary dark:text-[#d4af37] font-bold text-sm hover:underline mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-black/50 dark:text-white/40">First Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-gray-50 dark:bg-background-8 border border-gray-200 dark:border-background-5 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-sm text-black dark:text-white shadow-sm placeholder-black/30 dark:placeholder-white/20" 
                        placeholder="Chinedu" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-black/50 dark:text-white/40">Last Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-gray-50 dark:bg-background-8 border border-gray-200 dark:border-background-5 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-sm text-black dark:text-white shadow-sm placeholder-black/30 dark:placeholder-white/20" 
                        placeholder="Okonkwo" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-black/50 dark:text-white/40">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full bg-gray-50 dark:bg-background-8 border border-gray-200 dark:border-background-5 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-sm text-black dark:text-white shadow-sm placeholder-black/30 dark:placeholder-white/20" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-black/50 dark:text-white/40">Inquiry Type</label>
                    <div className="relative">
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-background-8 border border-gray-200 dark:border-background-5 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-sm text-black dark:text-white appearance-none cursor-pointer shadow-sm"
                      >
                        <option value="Membership Support">Membership Support</option>
                        <option value="Events & Reunions">Events & Reunions</option>
                        <option value="Donations">Donations & Giving</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-black/40 dark:text-white/40">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-black/50 dark:text-white/40">Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full bg-gray-50 dark:bg-background-8 border border-gray-200 dark:border-background-5 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-sm text-black dark:text-white resize-none shadow-sm placeholder-black/30 dark:placeholder-white/20" 
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-3 bg-gradient-to-r from-secondary to-[#8B0E17] hover:from-[#8B0E17] hover:to-secondary text-white w-full py-4.5 rounded-xl font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 active:scale-[0.99] disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="size-3.5 group-hover:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </RevealAnimation>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
