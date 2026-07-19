import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';
import Image from 'next/image';
import bgImg from '@public/images/gallery_4.png';

const JoinUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative overflow-hidden rounded-[32px] bg-[#3F0606] px-6 py-12 text-white shadow-2xl sm:px-10 md:px-16 lg:px-20">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={bgImg}
                alt="Alumni background"
                fill
                className="scale-110 object-cover opacity-15 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-linear-to-b from-[#3F0606] via-[#541A17]/95 to-transparent lg:bg-linear-to-r" />
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-y-16 lg:grid-cols-12 lg:gap-x-12">
              {/* LHS - Main Heading */}
              <div className="space-y-6 text-center lg:col-span-4 lg:text-left">
                <div className="space-y-4">
                  <h2 className="leading-[1.2] font-bold tracking-tight text-white uppercase">
                    Be a part of <br className="hidden lg:block" /> Something Greater
                  </h2>
                  <p className="mx-auto max-w-[400px] text-sm leading-relaxed font-medium text-white/80 sm:text-base lg:mx-0">
                    Reconnect with your roots and contribute to the legacy of FGC Enugu.
                  </p>
                </div>
              </div>

              {/* Center - Perks Grid */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-y border-white/10 px-0 py-12 sm:grid-cols-3 lg:col-span-5 lg:border-x lg:border-y-0 lg:px-10 lg:py-4">
                {/* Perk 1 */}
                <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-6 text-[#D4AF37]">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg leading-tight font-black tracking-tight text-white">
                      Expand Your <br /> Network
                    </p>
                    <p className="text-[10px] font-medium tracking-[0.1em] text-white/50 uppercase">
                      Connect with alumni
                    </p>
                  </div>
                </div>
                {/* Perk 2 */}
                <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-6 text-[#D4AF37]">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.625a2.25 2.25 0 0 0-2.25 2.25m16.5 0v2.25a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25v-2.25m13.5-3V4.625c0-.621-.504-1.125-1.125-1.125H8.25c-.621 0-1.125.504-1.125 1.125v4.25"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg leading-tight font-black tracking-tight text-white">
                      Access <br /> Opportunities
                    </p>
                    <p className="text-[10px] font-medium tracking-[0.1em] text-white/50 uppercase">
                      Growth & Mentorship
                    </p>
                  </div>
                </div>
                {/* Perk 3 */}
                <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-6 text-[#D4AF37]">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg leading-tight font-black tracking-tight text-white">
                      Make an <br /> Impact
                    </p>
                    <p className="text-[10px] font-medium tracking-[0.1em] text-white/50 uppercase">
                      Give back to Enugu
                    </p>
                  </div>
                </div>
              </div>

              {/* RHS - CTA Button */}
              <div className="flex w-full justify-center lg:col-span-3 lg:justify-end">
                <Link
                  href="https://portal.allfgcealumni.org/sign-up"
                  target="_blank"
                  className="group relative flex w-full items-center justify-center gap-4 rounded-[16px] bg-white px-8 py-5 text-center text-base font-black whitespace-nowrap text-[#3F0606] transition-all duration-500 hover:scale-105 hover:shadow-2xl sm:w-auto md:text-lg">
                  Join FGCEOSA
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#3F0606] text-white shadow-lg transition-transform duration-500 group-hover:translate-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Decorative Gradients */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 size-96 animate-pulse rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-white/5 blur-3xl" />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default JoinUs;
