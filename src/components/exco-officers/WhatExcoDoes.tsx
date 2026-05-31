import RevealAnimation from '../animation/RevealAnimation';

const roles = [
  { icon: '🏛️', title: 'Governance', desc: 'Uphold the constitution, ensure transparent decision-making, and maintain institutional accountability.' },
  { icon: '📋', title: 'Decision Making', desc: 'Guide strategic priorities, approve budgets, and set the direction for FGCEOSA across all chapters.' },
  { icon: '🤝', title: 'Alumni Engagement', desc: 'Drive membership growth, organize events, and build a culture of active alumni participation.' },
  { icon: '🏗️', title: 'Project Oversight', desc: 'Manage infrastructure, scholarship, and development projects that directly benefit FGC Enugu.' },
  { icon: '🌍', title: 'Chapter Coordination', desc: 'Support and recognize local and international chapters, ensuring alignment with national objectives.' },
];

const WhatExcoDoes = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-background-6">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Role of the EXCO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                What the Executive Committee <span className="text-secondary">Does</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                The EXCO is not just a title — it is the operational backbone of FGCEOSA, responsible for every major initiative.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {roles.map((r, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.08} direction="up">
              <div className="bg-white dark:bg-background-7 rounded-2xl p-6 text-center border border-gray-100 dark:border-background-5 hover:border-secondary/30 hover:shadow-md transition-all duration-300 h-full">
                <span className="text-4xl block mb-4">{r.icon}</span>
                <h3 className="font-bold text-black dark:text-white mb-2">{r.title}</h3>
                <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatExcoDoes;
