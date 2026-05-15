import RevealAnimation from '@/components/animation/RevealAnimation';

const stats = [
  { value: '250+', label: 'Scholarships' },
  { value: '45+', label: 'Projects Done' },
  { value: '10K+', label: 'Lives Impacted' },
  { value: '50+', label: 'Years of Excellence' },
];

const ImpactNumbers = () => {
  return (
    <section className="py-6 bg-white dark:bg-background-7">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="p-10 bg-secondary rounded-[20px] relative overflow-hidden text-center text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 space-y-12">
              <h4 className="font-black text-white capitalize">our impact in numbers</h4>
              <div className="h-1.5 w-24 bg-[#d4af37] mx-auto rounded-full"></div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="font-black text-[#d4af37]">{stat.value}</h5>
                    <p className="capitalize text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ImpactNumbers;
