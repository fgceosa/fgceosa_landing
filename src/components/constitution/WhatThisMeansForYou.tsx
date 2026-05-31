import RevealAnimation from '../animation/RevealAnimation';

const benefits = [
  {
    emoji: '🤲',
    title: 'Your Membership Rights Are Protected',
    body: 'The constitution legally guarantees your right to vote, stand for election, access information, and participate in all association activities.',
  },
  {
    emoji: '⚖️',
    title: 'Decisions Are Fair and Transparent',
    body: 'No leader can act unilaterally. Every major decision requires proper voting, quorum, and documentation — ensuring fairness at all times.',
  },
  {
    emoji: '📢',
    title: 'Your Voice Has Formal Power',
    body: 'You have the constitutional right to raise motions, challenge decisions, and propose amendments at the AGM. Your participation directly shapes the association.',
  },
  {
    emoji: '🛡️',
    title: 'Your Interests Are Safeguarded',
    body: 'The constitution prohibits the use of association resources for personal benefit, ensuring that funds and activities serve all members equally.',
  },
];

const WhatThisMeansForYou = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-7 relative">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                For Every Member
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                What This Constitution <span className="text-secondary">Means for You</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Governance isn't abstract. Here is exactly how the FGCEOSA constitution affects your experience as a member.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((item, i) => (
            <RevealAnimation key={i} delay={0.15 + i * 0.1} direction="up">
              <div className="flex items-start gap-5 p-7 bg-gray-50 dark:bg-background-6 rounded-2xl border border-gray-100 dark:border-background-5 hover:border-secondary/30 hover:shadow-md transition-all duration-300 h-full">
                <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{item.title}</h3>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Pull quote */}
        <RevealAnimation delay={0.6} direction="up">
          <div className="mt-16 max-w-3xl mx-auto bg-secondary/5 border-l-4 border-secondary rounded-2xl p-8 text-center">
            <p className="text-xl md:text-2xl font-bold text-secondary italic">
              "The constitution doesn't restrict you — it empowers you. It is the guarantee that your membership is always meaningful."
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default WhatThisMeansForYou;
