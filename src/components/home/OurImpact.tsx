import RevealAnimation from '../animation/RevealAnimation';

const impactItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Scholarships Awarded',
    value: '250+',
    text: 'Supporting the next generation of excellence.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    title: 'Projects Completed',
    value: '45+',
    text: 'Modernizing infrastructure at FGC Enugu.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: 'Lives Impacted',
    value: '10,000+',
    text: 'Community outreach and empowerment programs.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    title: 'Memories Made',
    value: 'Infinite',
    text: 'Generations of alumni connected through heritage.',
  },
];

const OurImpact = () => {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-32 lg:pt-[100px] lg:pb-[100px] bg-white dark:bg-background-6">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[850px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-black dark:text-white font-bold text-xl md:text-2xl lg:text-3xl">
              Building a better tomorrow <span className="text-secondary">together.</span>
            </h2>
          </RevealAnimation>
        </div>

        <div className="rounded-[40px] bg-secondary p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {impactItems.map((item, index) => (
              <RevealAnimation key={index} delay={0.1 * (index + 1)}>
                <div className="flex flex-col items-center text-center space-y-6 group">
                  <div className="bg-white/10 text-white p-5 rounded-2xl transition-all duration-300 group-hover:bg-white group-hover:text-secondary group-hover:-translate-y-2">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-bold text-3xl lg:text-4xl">{item.value}</h3>
                    <p className="text-white font-bold text-base uppercase tracking-wider">{item.title}</p>
                    <p className="text-white/70 text-xs leading-relaxed max-w-[200px] mx-auto">
                      {item.text}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
