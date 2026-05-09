import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const JoinUs = () => {
  return (
    <section className="py-24 lg:py-40 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="mx-auto max-w-[1000px] text-center space-y-12">
          <RevealAnimation delay={0.1}>
             <h2 className="text-black dark:text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
               Be a part of <br />
               <span className="text-secondary">something greater.</span>
             </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-[700px] mx-auto font-medium">
              Join thousands of alumni across the globe. <br className="hidden md:block" /> Reconnect, empower, and build the future together.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <LinkButton
                href="/signup"
                className="btn btn-secondary btn-lg rounded-md font-bold px-12 py-5 text-xl shadow-xl hover:shadow-2xl transition-all">
                Join FGCEOSA
              </LinkButton>
              <LinkButton
                href="/membership"
                className="btn btn-outline border-secondary text-secondary btn-lg rounded-md font-bold px-12 py-5 text-xl hover:bg-secondary hover:text-white transition-all">
                Membership Benefits
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
