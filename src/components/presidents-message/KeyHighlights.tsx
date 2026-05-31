import RevealAnimation from '../animation/RevealAnimation';

interface HighlightCardProps {
  number: string;
  label: string;
  description: string;
  delay: number;
}

const HighlightCard = ({ number, label, description, delay }: HighlightCardProps) => (
  <RevealAnimation delay={delay} direction="up">
    <div className="bg-white dark:bg-background-7 border border-gray-100 dark:border-background-6 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="text-4xl font-extrabold text-secondary mb-2">{number}</div>
      <h3 className="text-lg font-bold text-black dark:text-white mb-2">{label}</h3>
      <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  </RevealAnimation>
);

const KeyHighlights = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-background-6 relative z-20 -mt-8 rounded-t-[40px]">
      <div className="main-container">
        
        <div className="text-center mb-12">
          <RevealAnimation delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">Leadership Snapshot</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            delay={0.2}
            number="15+"
            label="Active Chapters"
            description="Expanded our global footprint to connect more alumni locally and internationally."
          />
          <HighlightCard 
            delay={0.3}
            number="₦50M"
            label="Infrastructure Impact"
            description="Direct investments into FGC Enugu to improve learning and living conditions."
          />
          <HighlightCard 
            delay={0.4}
            number="300+"
            label="Mentorship Hours"
            description="Dedicated by senior alumni to guide the next generation of graduates."
          />
          <HighlightCard 
            delay={0.5}
            number="100%"
            label="Commitment"
            description="Our unwavering dedication to the 'Pro Unitate' spirit that binds us all."
          />
        </div>
        
      </div>
    </section>
  );
};

export default KeyHighlights;
