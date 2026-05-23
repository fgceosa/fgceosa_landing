import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsHero = () => {
  return (
    <section className="bg-secondary relative overflow-hidden pt-16 pb-10">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-1/3 translate-x-20 skew-x-[-20deg] bg-white/5"></div>
        <div className="absolute bottom-0 left-0 h-1/2 w-1/4 rounded-full bg-[#d4af37]/10 blur-[100px]"></div>
      </div>

      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LHS - Text Content */}
          <div className="space-y-8 text-left">
            <RevealAnimation delay={0.1} direction="left" instant={true}>
              <div className="inline-block">
                <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase md:text-sm">
                  ALUMNI PROJECTS
                </span>
                <div className="mt-1 h-0.5 w-12 bg-[#d4af37]"></div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} direction="left" instant={true}>
              <h2 className="capitalise leading-tight font-black text-white">
                Building Today. <span className="capitalise text-[#d4af37]">Empowering</span> Tomorrow.
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3} direction="left" instant={true}>
              <p className="max-w-lg text-lg leading-relaxed text-white/80 md:text-xl">
                Join us in our mission to restore, rebuild, and revitalize Federal Government College Enugu. Together,
                we make a difference that lasts for generations.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4} direction="left" instant={true}>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Link
                  href="#projects"
                  className="bg-secondary hover:text-secondary w-full rounded-xl border-1 px-8 py-4 text-center font-black text-white shadow-lg transition-all hover:bg-white sm:w-auto">
                  Explore Projects
                </Link>
                <Link
                  href="#"
                  className="hover:text-secondary w-full rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center font-black text-white transition-all hover:bg-white sm:w-auto">
                  View Photo Gallery{' '}
                </Link>
              </div>
            </RevealAnimation>
          </div>

          {/* RHS - Image */}
          <RevealAnimation delay={0.4} direction="right">
            <div className="relative">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[40px] border-8 border-white/10 shadow-2xl">
                <Image
                  src="/images/fgce-hero.png"
                  alt="FGCE Building"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 -z-10 hidden size-24 animate-pulse rounded-3xl bg-[#d4af37] md:block"></div>
              <div className="absolute -top-6 -right-6 -z-10 hidden size-32 rounded-full border-4 border-white/20 md:block"></div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
