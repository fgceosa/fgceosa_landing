'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const ConstitutionHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-36"
      style={{ minHeight: '560px' }}
    >
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

      {/* Decorative dot grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}></div>

      <div className="main-container relative z-10">
        <div className="max-w-2xl">
          <RevealAnimation delay={0.1} direction="up">
            <div className="mb-5 inline-block">
              <span className="text-sm font-bold tracking-widest text-[#d4af37] uppercase">Governance & Transparency</span>
              <div className="mt-1 h-0.5 w-12 bg-[#d4af37]"></div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="up">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              FGCEOSA Constitution —{' '}
              <span className="text-[#d4af37]">Our Governance Framework</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="up">
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              This document defines how FGCEOSA is structured, governed, and operated — ensuring transparency, accountability, and unity across all alumni activities worldwide.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4} direction="up">
            <div className="flex flex-wrap gap-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-secondary font-bold px-6 py-3 shadow-lg hover:bg-gray-100 transition-colors"
              >
                Read Summary
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              <a
                href="/constitution.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-[#d4af37] text-white font-bold px-6 py-3 shadow-lg hover:bg-[#b8941c] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Full Constitution
              </a>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ConstitutionHero;
