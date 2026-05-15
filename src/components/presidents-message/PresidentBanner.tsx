import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const PresidentBanner = () => {
  return (
    <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 bg-secondary">
      {/* Background Decorative Elements - Wrapped to prevent bleed while allowing identification text to overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#d4af37]/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LHS - Text Content */}
          <div className="text-left space-y-6">
            <RevealAnimation delay={0.1} direction="left" instant={true}>
              <div className="inline-block">
                <span className="text-[#d4af37] font-bold tracking-widest uppercase text-xs md:text-sm">PRESIDENT&apos;S MESSAGE</span>
                <div className="h-0.5 w-12 bg-[#d4af37] mt-1"></div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} direction="left" instant={true}>
              <h1 className="text-white text-3xl md:text-5xl font-black leading-tight">
                A Message From Our <span className="text-[#d4af37]">President</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3} direction="left" instant={true}>
              <p className="text-white/80 text-base md:text-xl max-w-lg leading-relaxed">
                A word from the Global President on our shared vision, collective achievements, and the strategic road ahead for the FGCEOSA community.
              </p>
            </RevealAnimation>
          </div>

          {/* RHS - Themed Image */}
          <div className="relative h-[300px] md:h-[450px] w-full mt-12 lg:mt-0">
            <RevealAnimation delay={0.3} direction="right">
              <div className="relative w-full h-[300px] md:h-[450px] rounded-[40px] overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5">
                <Image
                  src="/images/alumni_reunion.png"
                  alt="FGCE Alumni"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={90}
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>

      {/* Circular President Image & Info at Bottom Middle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center w-full px-4">
        <RevealAnimation delay={0.4} direction="up">
          <div className="flex flex-col items-center">
            <div className="size-40 md:size-64 rounded-full border-8 border-white dark:border-background-7 overflow-hidden shadow-2xl bg-white mb-6">
              <Image
                src="/images/president_portrait.png"
                alt="Dr. Emmanuel Okoro"
                width={300}
                height={300}
                className="size-full object-cover"
              />
            </div>

            {/* Name, Year, Title under the pic */}
            <div className="text-center space-y-2">
              <h2 className="text-secondary dark:text-accent text-2xl md:text-4xl font-black">Dr. Emmanuel Okoro</h2>
              <div className="flex flex-col items-center">
                <p className="text-secondary/60 dark:text-white/60 font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-sm">Global President | 2023 - 2025</p>
                <div className="h-1 w-16 bg-[#d4af37] mt-3 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default PresidentBanner;
