import RevealAnimation from '../animation/RevealAnimation';

const trustItems = [
  { label: 'Year Adopted', value: '2021', icon: '📅', detail: 'Adopted at the Annual General Meeting (AGM) of 2021 by the founding executive council.' },
  { label: 'Ratified By', value: 'Full EXCO', icon: '✅', detail: 'Ratified by the full Executive Council through a Consultative Congress process.' },
  { label: 'Governing Authority', value: 'FGCEOSA AGM', icon: '🏛️', detail: 'The Annual General Meeting holds supreme authority and oversight over all constitutional matters.' },
  { label: 'Legal Registration', value: 'CAC Nigeria', icon: '⚖️', detail: 'FGCEOSA is legally registered under the Companies and Allied Matters Act 2020 in Nigeria.' },
  { label: 'Document Length', value: '32 Pages', icon: '📄', detail: 'A thorough 32-page document covering all governance, membership, and operational procedures.' },
  { label: 'Review Cycle', value: 'As Required', icon: '🔄', detail: 'Amendments may be proposed at any AGM, ensuring the document remains current and relevant.' },
];

const TrustLegitimacy = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-7 relative overflow-hidden">
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="main-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Trust & Legitimacy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                Institutional <span className="text-secondary">Credibility</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                FGCEOSA's constitution was formed through a rigorous, inclusive process — giving it the legitimacy to govern a global alumni body.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustItems.map((item, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.1} direction="up">
              <div className="bg-gray-50 dark:bg-background-6 rounded-2xl p-6 border border-gray-100 dark:border-background-5 hover:border-secondary/30 hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40">{item.label}</p>
                    <p className="text-lg font-extrabold text-secondary">{item.value}</p>
                  </div>
                </div>
                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">{item.detail}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLegitimacy;
