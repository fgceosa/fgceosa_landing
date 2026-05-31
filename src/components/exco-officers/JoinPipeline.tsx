import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const JoinPipeline = () => {
  const pathways = [
    { icon: '📋', title: 'Join a Committee', desc: 'Contribute your expertise to a specific area — finance, legal, welfare, or communications.', cta: 'Apply Now', href: '/contact-us' },
    { icon: '🙋', title: 'Volunteer', desc: 'Help organize events, mentorship programs, or school development projects.', cta: 'Get Started', href: '/contact-us' },
    { icon: '🌍', title: 'Start a Chapter', desc: "No chapter near you? Rally 10+ alumni in your city and we'll help you establish one.", cta: 'Learn How', href: '/affiliates' },
    { icon: '🏗️', title: 'Fund a Project', desc: 'Directly sponsor infrastructure, scholarships, or technology upgrades at FGC Enugu.', cta: 'View Projects', href: '/projects' },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-background-6">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Get Involved
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                Join the Leadership <span className="text-secondary">Pipeline</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Leadership isn't reserved for the EXCO alone. Here are ways you can contribute today.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((p, i) => (
            <RevealAnimation key={i} delay={0.15 + i * 0.08} direction="up">
              <div className="bg-white dark:bg-background-7 rounded-2xl p-7 border border-gray-100 dark:border-background-5 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <span className="text-4xl mb-4">{p.icon}</span>
                <h3 className="font-bold text-black dark:text-white text-lg mb-2">{p.title}</h3>
                <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                <LinkButton
                  href={p.href}
                  insideSpan={false}
                  className="w-full btn bg-secondary/10 text-secondary hover:bg-secondary hover:text-white font-bold text-sm py-2 rounded-lg transition-all text-center"
                >
                  {p.cta}
                </LinkButton>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinPipeline;
