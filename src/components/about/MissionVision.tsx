import RevealAnimation from '../animation/RevealAnimation';

const MissionVision = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background-6 relative">
      <div className="main-container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">Our Purpose</h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                The driving force behind everything we do, simplifying our goals into actionable impact.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <RevealAnimation delay={0.2} direction="up">
            <div className="bg-white dark:bg-background-7 rounded-3xl p-10 lg:p-14 shadow-xl h-full border-t-4 border-secondary relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-125"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">Our Mission</h3>
                <p className="text-xl text-black/80 dark:text-white/80 leading-relaxed font-medium">
                  To connect alumni through mentorship, opportunity, and lifelong community support.
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* Vision */}
          <RevealAnimation delay={0.3} direction="up">
            <div className="bg-white dark:bg-background-7 rounded-3xl p-10 lg:p-14 shadow-xl h-full border-t-4 border-secondary relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-125"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">Our Vision</h3>
                <p className="text-xl text-black/80 dark:text-white/80 leading-relaxed font-medium">
                  To build a world-class alumni network that empowers members globally while strengthening our alma mater.
                </p>
              </div>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
