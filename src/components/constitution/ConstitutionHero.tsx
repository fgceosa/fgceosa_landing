'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const ConstitutionHero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24" style={{ minHeight: '500px' }}>
      <div className="absolute inset-0 h-full w-full">
        {/* Gradient overlay with image */}
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(to right, rgb(101, 7, 15) 0%, rgba(101,7,15,0.95) 40%, rgba(30,41,59,0.6) 60%, rgba(30,41,59,0.0) 80%), url(/images/fgce-hero.png)`,
            backgroundColor: '#65070F', // fallback
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}></div>
      </div>
      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:gap-20 lg:grid-cols-2">
          {/* LHS - Content */}
          <div className="text-white">
            <RevealAnimation delay={0.1} direction="up">
              <div className="mb-6 inline-block">
                <span className="text-sm font-bold tracking-widest text-[#d4af37] uppercase">Constitution</span>
                <div className="mt-1 h-0.5 w-12 bg-[#d4af37]"></div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="up">
              <h2 className="mb-6 leading-tight font-bold text-white">
                FGCEOSA Constitution 2026 <span className="text-[#d4af37]"></span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="up">
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                Discover the guiding principles, key highlights, and the full details of our constitution. Download,
                preview, or share the document below.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstitutionHero;
