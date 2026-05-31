import RevealAnimation from '../animation/RevealAnimation';

const WhyItMatters = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-background-6">
      <div className="main-container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LHS */}
          <RevealAnimation delay={0.1} direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
                <span>Why It Matters</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 leading-tight">
                A Constitution is the <span className="text-secondary">Foundation of Trust</span>
              </h2>
              <div className="space-y-4 text-black/70 dark:text-white/70 text-lg leading-relaxed">
                <p>
                  Without a constitution, an organization has no compass. FGCEOSA's constitution was created to guarantee that no single individual or group holds unchecked power.
                </p>
                <p>
                  It defines your rights as a member, how decisions are made on your behalf, and what protections you are entitled to as part of this community.
                </p>
                <p className="font-semibold text-black dark:text-white">
                  In short: the constitution is what makes FGCEOSA accountable to you.
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* RHS */}
          <RevealAnimation delay={0.3} direction="right">
            <div className="space-y-4">
              {[
                { icon: '⚖️', title: 'Ensures Accountability', desc: 'Every decision by leadership must align with constitutional principles, giving members recourse if it does not.' },
                { icon: '🛡️', title: 'Protects Member Rights', desc: 'Your membership rights, dues, and representation are all legally defined and protected by this document.' },
                { icon: '🌍', title: 'Unifies a Global Network', desc: 'With alumni in 25+ countries, the constitution is the single document that aligns everyone under the same values.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white dark:bg-background-7 rounded-2xl shadow-sm border border-gray-100 dark:border-background-5">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-black dark:text-white mb-1">{item.title}</h4>
                    <p className="text-black/60 dark:text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
