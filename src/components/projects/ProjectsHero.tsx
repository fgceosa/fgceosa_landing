import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-secondary overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#d4af37]/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LHS - Text Content */}
          <div className="text-left space-y-8">
            <RevealAnimation delay={0.1} direction="left" instant={true}>
              <div className="inline-block">
                <span className="text-[#d4af37] font-bold tracking-widest uppercase text-xs md:text-sm">ALUMNI PROJECTS</span>
                <div className="h-0.5 w-12 bg-[#d4af37] mt-1"></div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} direction="left" instant={true}>
              <h2 className="text-white font-black leading-tight capitalise">
                Building Today. <span className="text-[#d4af37] capitalise">Empowering</span> Tomorrow.
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3} direction="left" instant={true}>
              <p className="text-white/80 text-lg md:text-xl max-w-lg leading-relaxed">
                Join us in our mission to restore, rebuild, and revitalize Federal Government College Enugu. Together, we make a difference that lasts for generations.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4} direction="left" instant={true}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="#projects"
                  className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-xl font-black text-center hover:bg-white transition-all shadow-lg border-1"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-black text-center hover:bg-white hover:text-secondary transition-all"
                >
                  View Photo Gallery                </Link>
              </div>
            </RevealAnimation>
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

export default ProjectsHero;
