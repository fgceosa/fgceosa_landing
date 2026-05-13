import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';
import Image from 'next/image';
import bgImg from '@public/images/gallery_3.png';

const ConnectionBanner = () => {
  return (
    <section className="py-8 bg-white relative overflow-hidden">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative overflow-hidden rounded-[32px] bg-[#3F0606] px-6 py-12 sm:px-10 md:px-16 lg:px-20 text-white shadow-2xl">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={bgImg}
                alt="Community background"
                fill
                className="object-cover opacity-15 mix-blend-overlay scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-[#3F0606] via-[#541A17]/95 to-transparent" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 items-center">
              {/* LHS - Main Heading & Text */}
              <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-white">
                    Your Connection, <br className="hidden lg:block" /> Our Strength
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium max-w-[400px] mx-auto lg:mx-0">
                    Empowering the global network of FGC Enugu alumni across generations.
                  </p>
                </div>
              </div>

              {/* Center - Stats Grid */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-8 border-y lg:border-y-0 lg:border-x border-white/10 py-12 lg:py-4 px-0 lg:px-10">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-[#D4AF37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-black text-white tracking-tight">4,520+</p>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37]">Alumni Worldwide</p>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-[#D4AF37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-black text-white tracking-tight">25+</p>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37]">Countries</p>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-[#D4AF37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-black text-white tracking-tight">100+</p>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37]">Initiatives</p>
                  </div>
                </div>
              </div>

              {/* RHS - CTA Button */}
              <div className="lg:col-span-3 flex justify-center lg:justify-end w-full">
                <Link href="#" className="group relative flex items-center justify-center gap-4 bg-white text-[#3F0606] px-8 py-5 rounded-[16px] font-black text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 whitespace-nowrap w-full sm:w-auto text-center">
                  Join FGCEOSA Today
                  <div className="flex items-center justify-center size-8 bg-[#3F0606] text-white rounded-full group-hover:translate-x-2 transition-transform duration-500 shadow-lg shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Decorative Gradients */}
            <div className="absolute -bottom-24 -right-24 size-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -top-24 -left-24 size-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ConnectionBanner;
