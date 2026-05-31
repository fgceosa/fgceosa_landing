'use client';

import RevealAnimation from '../animation/RevealAnimation';

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.97 5.97 0 0 0-.942 3.197M12 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM12 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Zm-5.625 2.625a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Zm11.25 0a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z" />
      </svg>
    ),
    title: 'Lifelong Networking',
    description: 'Connect with alumni across industries, class sets, and generations globally.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.625a2.25 2.25 0 0 0-2.25 2.25m16.5 0v2.25a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25v-2.25m13.5-3V4.625c0-.621-.504-1.125-1.125-1.125H8.25c-.621 0-1.125.504-1.125 1.125v4.25" />
      </svg>
    ),
    title: 'Career Growth',
    description: 'Access mentorship, job boards, exclusive opportunities, and professional guidance.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: 'Give Back',
    description: 'Support students, scholarship schemes, and infrastructure development initiatives.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Exclusive Community',
    description: 'Participate in local chapters, international reunions, forums, and exclusive events.',
  },
];

const WhyJoin = () => {
  return (
    <section className="bg-white dark:bg-background-7 py-16 md:py-20 border-b border-gray-100 dark:border-white/5">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[850px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <div className="bg-secondary/5 border-secondary/10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase">
                Member Benefits
              </span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-black dark:text-white font-bold leading-tight">
              Why Join <span className="text-secondary">FGCEOSA?</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-black/60 dark:text-white/60 text-base md:text-lg">
              Unlock a world of opportunities, support your alma mater, and stay connected with the legacy of FGC Enugu.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <RevealAnimation key={index} delay={0.1 * (index + 1)}>
              <div className="group bg-white dark:bg-background-8 border border-secondary/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-secondary/20 mb-6">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
