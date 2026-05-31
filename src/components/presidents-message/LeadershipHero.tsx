import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const LeadershipHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-secondary overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#d4af37]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="main-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <RevealAnimation delay={0.1} direction="up">
            <div className="inline-block mb-6">
              <span className="text-[#d4af37] font-bold tracking-widest uppercase text-xs md:text-sm">Leadership Vision</span>
              <div className="h-0.5 w-12 bg-[#d4af37] mt-2 mx-auto"></div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="up">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              A Message of <span className="text-[#d4af37]">Unity</span>, Progress, and <span className="text-[#d4af37]">Purpose</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="up">
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              A personal message from the President of FGCEOSA on the vision, progress, and future of our global alumni community.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4} direction="up">
            <div className="flex flex-col items-center">
              <div className="size-32 md:size-48 rounded-full border-4 md:border-8 border-white/20 overflow-hidden shadow-2xl bg-white mb-6 relative">
                <Image
                  src="/images/excos/nadozie.jpeg"
                  alt="Engr. Nnadozie Eze"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="text-center space-y-1">
                <h2 className="text-white text-2xl md:text-3xl font-bold">Engr. Nnadozie Eze</h2>
                <p className="text-[#d4af37] font-semibold tracking-widest uppercase text-sm">President | 2021 - 2023</p>
              </div>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.6} direction="up">
            <div className="mt-16 flex flex-col items-center justify-center animate-bounce">
              <span className="text-white/60 text-xs uppercase tracking-widest mb-2 font-semibold">Scroll to Read</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white/60">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
