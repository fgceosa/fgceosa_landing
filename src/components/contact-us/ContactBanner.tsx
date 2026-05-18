'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const ContactBanner = () => {
  return (
    <section className="bg-secondary dark:bg-background-8 pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-20">
          {/* LHS - Content */}
          <div className="text-white">
            <RevealAnimation delay={0.1} direction="up">
              <div className="inline-block mb-6">
                <span className="text-[#d4af37] font-bold tracking-widest uppercase text-sm">Contact Us</span>
                <div className="h-0.5 w-12 bg-[#d4af37] mt-1"></div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="up">
              <h1 className="text-heading-3 md:text-heading-2 xl:text-heading-1 font-bold leading-tight mb-6 text-white">
                We&apos;re Here to <span className="text-[#d4af37]">Help You.</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="up">
              <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                Have a question about membership, events, or donations? Need assistance with your alumni account? Our team is here to support you every step of the way.
              </p>
            </RevealAnimation>

            {/* 3 Icons and texts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <RevealAnimation delay={0.4} direction="up">
                <div className="flex flex-col gap-3 group">
                  <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#d4af37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <span className="font-bold text-sm tracking-wide">Quick Response</span>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="up">
                <div className="flex flex-col gap-3 group">
                  <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#d4af37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  </div>
                  <span className="font-bold text-sm tracking-wide">Trusted Support</span>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6} direction="up">
                <div className="flex flex-col gap-3 group">
                  <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#d4af37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.998 5.998 0 0 0-12 0m12 0c0-1.233-.314-2.433-.91-3.488m-10.18 3.488A5.995 5.995 0 0 1 12 15c.438 0 .868.047 1.282.139m1.916-4.899a3 3 0 1 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                  </div>
                  <span className="font-bold text-sm tracking-wide">Alumni Focused</span>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* RHS - Image */}
          <RevealAnimation delay={0.4} direction="right">
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl aspect-[4/3] group">
                <Image
                  src="/images/fgce-hero.png"
                  alt="FGCE Building"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 size-24 bg-[#d4af37] rounded-3xl -z-10 animate-pulse hidden md:block"></div>
              <div className="absolute -top-6 -right-6 size-32 border-4 border-white/20 rounded-full -z-10 hidden md:block"></div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
