import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';

const ConstitutionCTA = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="main-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <RevealAnimation delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Be Part of a <span className="text-[#d4af37]">Governed Community</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="up">
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              FGCEOSA's constitution guarantees your rights. Join the community today and take your place in a transparently governed global alumni network.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <LinkButton
                href="/signup"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-white text-secondary font-bold px-8 py-3 rounded-xl btn-lg hover:bg-gray-100 shadow-xl transition-all"
              >
                <span className="!normal-case !first-letter:normal-case inline-flex items-center">
                  <span className="mr-1.5">Join</span>
                  <span className="uppercase">FGCEOSA</span>
                </span>
              </LinkButton>
              <LinkButton
                href="/affiliates"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-bold px-8 py-3 rounded-xl btn-lg transition-all"
              >
                Explore Chapters
              </LinkButton>
              <LinkButton
                href="/contact-us"
                insideSpan={false}
                className="w-full sm:w-auto btn bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-bold px-8 py-3 rounded-xl btn-lg transition-all"
              >
                Contact Secretariat
              </LinkButton>
              <a
                href="/constitution.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white border-2 border-[#d4af37]/60 hover:border-[#d4af37] hover:bg-[#d4af37]/10 font-bold px-8 py-3 rounded-xl transition-all text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Constitution
              </a>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default ConstitutionCTA;
