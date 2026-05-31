import RevealAnimation from '../animation/RevealAnimation';

const AlumniImpact = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background-8 relative overflow-hidden">
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="main-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                Our Collective <span className="text-secondary">Impact</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Numbers that reflect our dedication to giving back to the institution that shaped us.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealAnimation delay={0.2} direction="up">
            <div className="bg-white dark:bg-background-7 p-10 rounded-[32px] text-center shadow-lg border border-gray-100 dark:border-background-6">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84a50.57 50.57 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="text-5xl font-black text-black dark:text-white mb-2">75+</div>
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Scholarships Awarded</p>
              <p className="text-black/60 dark:text-white/60 text-sm">Ensuring deserving students continue their education uninterrupted.</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="up">
            <div className="bg-white dark:bg-background-7 p-10 rounded-[32px] text-center shadow-lg border border-gray-100 dark:border-background-6">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div className="text-5xl font-black text-black dark:text-white mb-2">45+</div>
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Projects Completed</p>
              <p className="text-black/60 dark:text-white/60 text-sm">From lab equipment to dormitory renovations across FGC Enugu.</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4} direction="up">
            <div className="bg-white dark:bg-background-7 p-10 rounded-[32px] text-center shadow-lg border border-gray-100 dark:border-background-6">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="text-5xl font-black text-black dark:text-white mb-2">5000+</div>
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Engaged Alumni</p>
              <p className="text-black/60 dark:text-white/60 text-sm">A rapidly expanding global network of professionals supporting one another.</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AlumniImpact;
