'use client';

import RevealAnimation from '../animation/RevealAnimation';

const metrics = [
  {
    value: '4,500+',
    label: 'Alumni Worldwide',
    description: 'A thriving global network of graduates.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    value: '25+',
    label: 'Countries Represented',
    description: 'Active members spanning multiple continents.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    value: '75+',
    label: 'Scholarships Awarded',
    description: 'Empowering outstanding and deserving students.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    value: '45+',
    label: 'Projects Completed',
    description: 'Transforming infrastructure at FGC Enugu.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
  {
    value: '30+',
    label: 'Years of Legacy',
    description: 'Fostering excellence, discipline, and unity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
];

const ImpactSnapshot = () => {
  return (
    <section id="impact-snapshot" className="bg-[#F9FAFB] dark:bg-background-6 py-12 md:py-16 border-y border-gray-100 dark:border-white/5 scroll-mt-24">
      <div className="main-container">
        <div className="mx-auto mb-10 max-w-[850px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge border-secondary text-secondary rounded-md border-2 bg-white font-bold uppercase">
              Impact Snapshot
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="font-bold text-black dark:text-white leading-tight">
              Our Community <span className="text-secondary">in numbers.</span>
            </h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <RevealAnimation key={index} delay={0.1 * (index + 1)}>
              <div className="group bg-white dark:bg-background-8 p-6 rounded-2xl border border-secondary/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[180px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-secondary/5 text-secondary p-3 rounded-xl transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    {metric.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-secondary font-black tracking-tight text-3xl mb-1">
                    {metric.value}
                  </h3>
                  <p className="text-sm font-bold text-black dark:text-white mb-2 leading-tight">
                    {metric.label}
                  </p>
                  <p className="text-xs text-black/50 dark:text-white/60 leading-normal">
                    {metric.description}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSnapshot;
