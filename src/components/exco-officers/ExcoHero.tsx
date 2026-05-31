import RevealAnimation from '@/components/animation/RevealAnimation';

const ExcoHero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-36" style={{ minHeight: '520px' }}>
      <div className="absolute inset-0 h-full w-full">
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(to right, rgb(101, 7, 15) 0%, rgba(101,7,15,0.95) 40%, rgba(30,41,59,0.6) 60%, rgba(30,41,59,0.0) 80%), url(/images/fgce-hero.png)`,
            backgroundColor: '#65070F',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}></div>

      <div className="main-container relative z-10">
        <div className="max-w-3xl">
          <RevealAnimation delay={0.1} direction="up">
            <div className="mb-5 inline-block">
              <span className="text-sm font-bold tracking-widest text-[#d4af37] uppercase">Leadership</span>
              <div className="mt-1 h-0.5 w-12 bg-[#d4af37]"></div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="up">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              FGCEOSA <span className="text-[#d4af37]">Executive Committee</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="up">
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              The leadership team responsible for guiding FGCEOSA&apos;s vision, governance, alumni engagement, and development initiatives across all chapters worldwide.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4} direction="up">
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">13</div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Members</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">6</div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Departments</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-[#d4af37]">2021–2023</div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Term</div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ExcoHero;
