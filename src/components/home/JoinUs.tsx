import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';
import Image from 'next/image';
import bgImg from '@public/images/gallery_4.png';

const JoinUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="main-container px-4 sm:px-6">
        <RevealAnimation delay={0.1}>
          <div className="relative overflow-hidden rounded-[32px] bg-[#3F0606] px-6 py-12 sm:px-10 md:px-16 lg:px-20 text-white shadow-2xl">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={bgImg}
                alt="Alumni background"
                fill
                className="object-cover opacity-15 mix-blend-overlay scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-[#3F0606] via-[#541A17]/95 to-transparent" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 items-center">
              {/* LHS - Main Heading */}
              <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <h2 className="font-bold leading-[1.2] tracking-tight text-white uppercase italic">
                    Be a part of <br className="hidden lg:block" /> Something Greater
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium max-w-[400px] mx-auto lg:mx-0">
                    Reconnect with your roots and contribute to the legacy of FGC Enugu.
                  </p>
                </div>
              </div>

              {/* Center - Perks Grid */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-8 border-y lg:border-y-0 lg:border-x border-white/10 py-12 lg:py-4 px-0 lg:px-10">
                {/* Perk 1 */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-[#D4AF37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-black text-white tracking-tight leading-tight">Expand Your <br /> Network</p>
                    <p className="text-[10px] font-medium text-white/50 uppercase tracking-[0.1em]">Connect with alumni</p>
                  </div>
                </div>
                {/* Perk 2 */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-[#D4AF37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.625a2.25 2.25 0 0 0-2.25 2.25m16.5 0v2.25a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25v-2.25m13.5-3V4.625c0-.621-.504-1.125-1.125-1.125H8.25c-.621 0-1.125.504-1.125 1.125v4.25" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-black text-white tracking-tight leading-tight">Access <br /> Opportunities</p>
                    <p className="text-[10px] font-medium text-white/50 uppercase tracking-[0.1em]">Growth & Mentorship</p>
                  </div>
                </div>
                {/* Perk 3 */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-[#D4AF37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-black text-white tracking-tight leading-tight">Make an <br /> Impact</p>
                    <p className="text-[10px] font-medium text-white/50 uppercase tracking-[0.1em]">Give back to Enugu</p>
                  </div>
                </div>
              </div>

              {/* RHS - CTA Button */}
              <div className="lg:col-span-3 flex justify-center lg:justify-end w-full">
                <Link href="/signup" className="group relative flex items-center justify-center gap-4 bg-white text-[#3F0606] px-8 py-5 rounded-[16px] font-black text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 whitespace-nowrap w-full sm:w-auto text-center">
                  Join FGCEOSA
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

export default JoinUs;
