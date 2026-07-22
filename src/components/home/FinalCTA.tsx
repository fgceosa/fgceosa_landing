'use client';

import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';
import Image from 'next/image';
import bgImg from '@public/images/gallery_3.png';

const FinalCTA = () => {
  return (
    <section className="py-12 bg-white dark:bg-background-7 relative overflow-hidden">
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

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
              {/* LHS - Main Heading & Text */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-white">
                  The FGCE Story Continues With You.
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium max-w-[550px] mx-auto lg:mx-0">
                  Reconnect with old friends, create new opportunities, and help shape the future of our alma mater.
                </p>
              </div>

              {/* RHS - CTA Buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end w-full">
                <Link
                  href="https://portal.allfgcealumni.org/sign-up"
                  target="_blank"
                  className="group relative flex items-center justify-center gap-3 bg-white text-[#3F0606] px-6 py-4 rounded-[16px] font-black text-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap text-center">
                  <span className="inline-flex items-center">
                    <span className="mr-1.5 font-black">Join</span>
                    <span className="uppercase font-black mr-1.5">FGCEOSA</span>
                    <span className="font-black">Today</span>
                  </span>
                  <div className="flex items-center justify-center size-6 bg-[#3F0606] text-white rounded-full group-hover:translate-x-1 transition-transform duration-300 shadow-md shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/contact-us"
                  className="group relative flex items-center justify-center gap-3 border border-white/60 hover:border-white text-white px-6 py-4 rounded-[16px] font-black text-sm hover:bg-white/5 transition-all duration-300 whitespace-nowrap text-center">
                  Support Our Mission
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

export default FinalCTA;
