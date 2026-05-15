import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const ProjectCTA = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      </div>

      <div className="main-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <RevealAnimation delay={0.1}>
            <h2 className="text-white font-black leading-tight">
              Have a Project Idea for <br className="hidden md:block" /> <span className="text-[#d4af37]">Our Alma Mater?</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed">
              We are always looking for impactful ways to contribute to Federal Government College Enugu. Share your proposal or partner with us to bring a project to life.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-[#d4af37] text-secondary px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-xl hover:-translate-y-1"
              >
                Submit a Proposal
              </Link>
              <Link
                href="/donate"
                className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-black text-lg hover:bg-white hover:text-secondary transition-all"
              >
                Support Existing Projects
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
