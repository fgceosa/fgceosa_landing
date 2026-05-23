'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import Image from 'next/image';

const ContactCTASection = () => {
  const helpCards = [
    {
      title: 'Member Support',
      description: 'Need help with your membership or account access?',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
    },
    {
      title: 'Events & Reunions',
      description: 'Inquiring about upcoming association events or reunions?',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
    },
    {
      title: 'Donations & Giving',
      description: 'Want to support our alma mater through a donation?',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      ),
    },
    {
      title: 'General Inquiry',
      description: 'Have a general question not covered by the above?',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-background-3 dark:bg-background-8">
      <div className="py-10">
        <div className="main-container">
          <div className="mb-10 text-center">
            <RevealAnimation delay={0.1}>
              <div>
                <h2 className="text-heading-4 md:text-heading-3 text-secondary dark:text-accent mb-3 font-bold capitalize">
                  How can we help?
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                  Select one of the categories below to find the right point of contact or information.
                </p>
              </div>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {helpCards.map((card, index) => (
              <RevealAnimation key={index} delay={0.1 * (index + 1)} direction="up">
                <div className="dark:bg-background-7 dark:border-stroke-7 group flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="bg-secondary group-hover:shadow-secondary/20 mb-4 flex size-12 items-center justify-center rounded-xl text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                    {card.icon}
                  </div>
                  <h4 className="text-secondary dark:text-accent mb-2 text-lg font-bold transition-colors duration-500">
                    {card.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                    {card.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Section - Contained Card */}
      {/* <div className="py-10">
        <div className="main-container">
          <div className="bg-secondary rounded-[32px] p-8 md:p-16 border border-white/5 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
              <RevealAnimation delay={0.1} direction="left">
                <div className="text-white text-center lg:text-left">
                  <h3 className="text-heading-4 md:text-heading-3 font-bold mb-2 uppercase tracking-wider text-white">Stay Connected</h3>
                  <p className="text-white/60 text-sm md:text-base max-w-md">
                    Subscribe to our newsletter for the latest updates, event news, and alumni spotlights.
                  </p>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.2} direction="right">
                <form className="w-full max-w-xl flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3.5 px-6 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-all"
                    required
                  />
                  <button type="submit" className="group bg-white text-secondary px-8 py-3.5 rounded-xl font-bold hover:bg-[#d4af37] transition-all shadow-lg active:scale-95 shrink-0 flex items-center justify-center gap-2">
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </form>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div> */}

      {/* Final Brand CTA Section */}
      <div className="py-5">
        <div className="main-container">
          <RevealAnimation delay={0.1} direction="up">
            <div className="flex flex-col items-center justify-between gap-10 rounded-[32px] px-8 pb-5 md:px-10 lg:flex-row">
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-8 md:text-left">
                <figure className="dark:border-background-7 size-20 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl md:size-24">
                  <Image
                    src="/images/fgceosa_logo.jpeg"
                    alt="FGCEOSA Logo"
                    width={96}
                    height={96}
                    className="size-full object-contain"
                  />
                </figure>
                <div className="space-y-3">
                  <div className="leading-tight">
                    <span className="text-secondary dark:text-accent text-2xl font-bold tracking-tight uppercase md:text-3xl">
                      FGCEOSA
                    </span>
                    <div className="text-secondary/60 mt-1 text-xs font-bold tracking-widest uppercase md:text-sm dark:text-white/50">
                      FGC Enugu Old Students Association
                    </div>
                  </div>
                  <p className="max-w-xl text-base font-medium text-gray-600 italic md:text-lg dark:text-gray-400">
                    &quot;United by our past, inspired to build the future. Join the community of excellence
                    today.&quot;
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href="https://fgceoapp.netlify.app/sign-up"
                  target="_blank"
                  className="group bg-secondary relative flex items-center justify-center gap-4 rounded-2xl px-10 py-4 text-lg font-black whitespace-nowrap text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  Join FGCEOSA Today
                  <div className="text-secondary flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-500 group-hover:translate-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
