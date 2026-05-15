import RevealAnimation from '@/components/animation/RevealAnimation';

const programs = [
  {
    title: 'Scholarship Scheme',
    description: 'Providing financial support to brilliant but indigent students to ensure no one is left behind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Mentorship Program',
    description: 'Connecting current students with successful alumni for career guidance and personal growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.971 5.971 0 0 0-.942 3.197M12 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-7 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
      </svg>
    ),
  },
  {
    title: 'Health Initiatives',
    description: 'Regular health checks and infrastructure improvements for the school medical center.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'Digital Literacy',
    description: 'Equipping the school with modern computer labs and providing digital skills training.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
  },
];

const ProgramsImpact = () => {
  return (
    <section className="py-12 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="text-center mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <h6 className="text-secondary dark:text-accent font-black mb-4 uppercase">our focus areas </h6>

              <h2 className="text-secondary dark:text-accent font-black mb-4 capitalize">programs that create <span className="text-black">lasting impact</span></h2>
              <div className="h-1.5 w-24 bg-[#d4af37] mx-auto rounded-full"></div>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <RevealAnimation key={index} delay={0.1 * (index + 1)} direction="up">
              <div className="p-10 rounded-[32px] bg-white border border-secondary/10 hover:bg-secondary/5 hover:text-white transition-all duration-500 group h-full flex flex-col items-center text-center space-y-6 shadow-lg">
                <div className="text-white bg-secondary group-hover:text-[#d4af37] transition-colors rounded-full p-5 shadow-2">
                  {program.icon}
                </div>
                <h5 className="text-black font-black">{program.title}</h5>
                <p className="text-sm font-medium opacity-70 leading-relaxed text-black">
                  {program.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsImpact;
