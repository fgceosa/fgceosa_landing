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
    <section className="bg-[#F9FAFB] dark:bg-background-6">
      <div className="main-container">
        <div className="mx-auto mb-20 max-w-[850px] text-center">
          {/* Entrance Badge */}
          <RevealAnimation delay={0.1}>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-[2px] w-12 bg-secondary/20" />
              <div className="border-2 border-secondary/20 px-6 py-2.5 rounded-xl flex items-center gap-3 bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.5 4.5L21.75 7m-1.5 12h1.5V5.25" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-secondary">OUR IMPACT</span>
              </div>
              <div className="h-[2px] w-12 bg-secondary/20" />
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="text-secondary font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Building a better tomorrow <br className="hidden md:block" /> <span className="text-black">together.</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mx-auto mt-6 max-w-[580px] text-black/60 font-medium text-base md:text-lg leading-relaxed">
              Our commitment to excellence extends beyond graduation. Through collective effort, we are transforming lives and empowering our community.
            </p>
          </RevealAnimation>
        </div>

        <div className="rounded-[48px] bg-white p-12 md:p-16 lg:p-20 shadow-xl border border-secondary/5 relative overflow-hidden">
          {/* Subtle decorative background elements */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {impactItems.map((item, index) => (
              <RevealAnimation key={index} delay={0.1 * (index + 1)}>
                <div className="flex flex-col items-center text-center space-y-8 group">
                  <div className="bg-secondary/5 text-secondary p-6 rounded-3xl transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-secondary/20">
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-secondary font-black tracking-tighter">{item.value}</h3>
                    <p className="text-black font-bold text-sm uppercase tracking-[0.15em]">{item.title}</p>
                    <p className="text-black/50 text-sm leading-relaxed max-w-[220px] mx-auto font-medium">
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
