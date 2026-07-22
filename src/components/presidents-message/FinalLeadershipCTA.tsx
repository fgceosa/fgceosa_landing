import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';

const FinalLeadershipCTA = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

      <div className="main-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <RevealAnimation delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              The Future of FGCEOSA is <span className="text-[#d4af37]">Built Together</span>.
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="up">
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
              Your expertise, your network, and your passion are the fuel for our progress. Don't sit on the sidelines.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <LinkButton
                href="/signup"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-[#d4af37] text-white hover:bg-white hover:text-secondary btn-lg rounded-xl font-bold px-8 shadow-xl transition-all duration-300"
              >
                <span className="!normal-case !first-letter:normal-case inline-flex items-center">
                  <span className="mr-1.5">Join</span>
                  <span className="uppercase">FGCEOSA</span>
                </span>
              </LinkButton>
              
              <LinkButton
                href="/chapters"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 btn-lg rounded-xl font-bold px-8 transition-all duration-300"
              >
                Find Your Chapter
              </LinkButton>

              <LinkButton
                href="/projects"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 btn-lg rounded-xl font-bold px-8 transition-all duration-300"
              >
                Support an Initiative
              </LinkButton>
            </div>
          </RevealAnimation>
          
        </div>
      </div>
    </section>
  );
};

export default FinalLeadershipCTA;
