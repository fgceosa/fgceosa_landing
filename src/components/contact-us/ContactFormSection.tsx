'use client';
import { useState } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import Image from 'next/image';

const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-10 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LHS - Info */}
          <div>
            <RevealAnimation delay={0.1}>
              <div>
                <h2 className="text-heading-3 font-bold mb-4 text-secondary dark:text-accent border-l-4 border-[#d4af37] pl-6">Get in touch</h2>
                <p className="text-tagline-1 text-gray-600 dark:text-gray-400 mb-10 max-w-md">
                  We&apos;d love to hear from you. Please fill out the form or reach out to us using the contact information below.
                </p>
              </div>
            </RevealAnimation>

            <div className="space-y-8">
              <RevealAnimation delay={0.2} direction="up">
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="size-12 rounded-full bg-secondary flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/20 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-secondary dark:text-accent">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">123 Alumni Way, Enugu, Nigeria</p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.3} direction="up">
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="size-12 rounded-full bg-secondary flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/20 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-secondary dark:text-accent">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">info@fgceosa.org</p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.4} direction="up">
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="size-12 rounded-full bg-secondary flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/20 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-secondary dark:text-accent">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">+234 (0) 800 123 4567</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            <div className="mt-12">
              <RevealAnimation delay={0.5}>
                <div>
                  <h4 className="font-bold text-lg mb-4 text-secondary dark:text-accent uppercase tracking-widest">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="group size-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 text-white hover:scale-110 hover:shadow-lg border border-white/10">
                      <Image className="size-5 transition-all group-hover:brightness-200" src={facebook} alt="Facebook" width={20} height={20} />
                    </a>
                    <a href="#" className="group size-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 text-white hover:scale-110 hover:shadow-lg border border-white/10">
                      <Image className="size-5 transition-all group-hover:brightness-200" src={instagram} alt="Instagram" width={20} height={20} />
                    </a>
                    <a href="#" className="group size-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 text-white hover:scale-110 hover:shadow-lg border border-white/10">
                      <Image className="size-5 transition-all group-hover:brightness-200" src={linkedin} alt="LinkedIn" width={20} height={20} />
                    </a>
                    <a href="#" className="group size-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 text-white hover:scale-110 hover:shadow-lg border border-white/10">
                      <Image className="size-5 transition-all group-hover:brightness-200" src={youtube} alt="YouTube" width={20} height={20} />
                    </a>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* RHS - Form */}
          <div className="bg-background-3 dark:bg-background-6 p-8 md:p-10 rounded-[40px] border border-gray-200 dark:border-stroke-7 shadow-xl">
            <RevealAnimation delay={0.2} direction="right">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
                  <div className="size-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary dark:text-accent">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-secondary dark:text-accent font-bold hover:underline mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider text-secondary/60 dark:text-accent/60">First Name</label>
                      <input required type="text" className="w-full bg-white dark:bg-background-7 border border-gray-200 dark:border-stroke-7 rounded-xl pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="John" />
                      <div className="absolute right-4 bottom-3.5 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider text-secondary/60 dark:text-accent/60">Last Name</label>
                      <input required type="text" className="w-full bg-white dark:bg-background-7 border border-gray-200 dark:border-stroke-7 rounded-xl pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="Doe" />
                      <div className="absolute right-4 bottom-3.5 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider text-secondary/60 dark:text-accent/60">Email Address</label>
                    <input required type="email" className="w-full bg-white dark:bg-background-7 border border-gray-200 dark:border-stroke-7 rounded-xl pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="john@example.com" />
                    <div className="absolute right-4 bottom-3.5 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider text-secondary/60 dark:text-accent/60">Message</label>
                    <textarea required rows={4} className="w-full bg-white dark:bg-background-7 border border-gray-200 dark:border-stroke-7 rounded-xl pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none" placeholder="Tell us how we can help..."></textarea>
                    <div className="absolute right-4 top-10 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3h9m-9 3h9m-6.75-12a3 3 0 0 0-3 3v15l7.5-7.5 7.5 7.5V5.25a3 3 0 0 0-3-3h-9Z" />
                      </svg>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-center gap-4 bg-secondary text-white w-full py-4 rounded-xl font-black text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 disabled:opacity-50 mt-4 overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <div className="flex items-center justify-center size-8 bg-white text-secondary rounded-full group-hover:translate-x-2 transition-transform duration-500 shadow-lg shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
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
