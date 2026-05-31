import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';

const AboutFinalCTA = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

      <div className="main-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <RevealAnimation delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Your Legacy Starts Here.
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="up">
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
              Reconnect with your peers. Contribute to something bigger. Be part of a global alumni movement.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <LinkButton
                href="/signup"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-white text-secondary hover:bg-gray-100 btn-lg rounded-xl font-bold px-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Join FGCEOSA Now
              </LinkButton>
              
              <LinkButton
                href="/projects"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 btn-lg rounded-xl font-bold px-8 transition-all duration-300"
              >
                Support a Project
              </LinkButton>

              <LinkButton
                href="/events"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 btn-lg rounded-xl font-bold px-8 transition-all duration-300"
              >
                Explore Events
              </LinkButton>
            </div>
          </RevealAnimation>
          
        </div>
      </div>
    </section>
  );
};

export default AboutFinalCTA;
