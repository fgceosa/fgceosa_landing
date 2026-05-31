import RevealAnimation from '../animation/RevealAnimation';

const LeadershipImpact = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background-6 relative overflow-hidden">
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="main-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealAnimation delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                What This EXCO Has <span className="text-secondary">Accomplished</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Under the theme "Powering Progress Together," Team SEAL has delivered tangible results.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { num: '45+', label: 'Projects Completed', icon: '🏗️' },
            { num: '75+', label: 'Scholarships Awarded', icon: '🎓' },
            { num: '15+', label: 'Active Chapters', icon: '🌍' },
            { num: '300+', label: 'Mentorship Hours', icon: '🤝' },
            { num: '₦50M+', label: 'Infrastructure Investment', icon: '💰' },
          ].map((item, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.08} direction="up">
              <div className="bg-white dark:bg-background-7 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-background-5">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <div className="text-3xl font-extrabold text-black dark:text-white mb-1">{item.num}</div>
                <p className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-widest">{item.label}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipImpact;
