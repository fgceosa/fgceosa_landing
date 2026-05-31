import RevealAnimation from '../animation/RevealAnimation';

interface PillarProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Pillar = ({ title, description, icon, delay }: PillarProps) => (
  <RevealAnimation delay={delay} direction="up">
    <div className="bg-white dark:bg-background-7 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-background-6 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 h-full group">
      <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black dark:text-white mb-3">{title}</h3>
      <p className="text-black/70 dark:text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  </RevealAnimation>
);

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-6 relative">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                <span>What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                Our Core Pillars
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                FGCEOSA is built on four foundational pillars designed to maximize value for our alumni and our alma mater.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Pillar
            delay={0.2}
            title="Networking & Career Growth"
            description="Access global alumni connections, exclusive job boards, and professional opportunities across diverse industries."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            }
          />
          <Pillar
            delay={0.3}
            title="Mentorship"
            description="Connect experienced alumni with younger graduates for guidance, skill development, and career navigation."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            }
          />
          <Pillar
            delay={0.4}
            title="Alma Mater Development"
            description="Directly support infrastructure upgrades, scholarship funds, and academic advancement programs at FGC Enugu."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            }
          />
          <Pillar
            delay={0.5}
            title="Community & Events"
            description="Participate in global reunions, regional chapter meetups, and exclusive networking events worldwide."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
