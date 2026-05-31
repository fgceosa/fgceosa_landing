import RevealAnimation from '../animation/RevealAnimation';

const highlights = [
  {
    icon: '🏛️',
    title: 'How FGCEOSA is Governed',
    body: 'An elected Executive Council (EXCO) runs day-to-day affairs. The Annual General Meeting (AGM) holds ultimate authority over major decisions and leadership elections.',
  },
  {
    icon: '👤',
    title: 'Who Leads the Association',
    body: 'Leadership is democratically elected by the general membership. The President and EXCO serve defined terms. No single person has unchecked authority.',
  },
  {
    icon: '🙋',
    title: 'How Members Participate',
    body: 'Members vote at AGMs, raise motions, stand for election, join committees, and engage through their local chapters. Your voice is constitutionally protected.',
  },
  {
    icon: '📊',
    title: 'How Transparency is Maintained',
    body: 'Financial records are audited independently each year. Decisions are recorded in minutes. All major changes to the constitution are published and communicated.',
  },
  {
    icon: '🌍',
    title: 'How Chapters Are Recognized Globally',
    body: 'Any group of 10 or more alumni in a region can apply to form a chapter. Chapters are officially recognized by the national EXCO after a formal review process.',
  },
];

const KeyHighlightsExpanded = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background-6">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Key Highlights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                Five Things Every Alumnus Should Know
              </h2>
            </div>
          </RevealAnimation>
        </div>

        <div className="space-y-5 max-w-4xl mx-auto">
          {highlights.map((item, i) => (
            <RevealAnimation key={i} delay={0.15 * (i + 1)} direction="up">
              <div className="flex items-start gap-6 bg-white dark:bg-background-7 p-7 rounded-2xl shadow-sm border border-gray-100 dark:border-background-5 hover:border-secondary/30 hover:shadow-md transition-all duration-300">
                <span className="text-4xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{item.title}</h3>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlightsExpanded;
