'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-background-9 dark:to-background-8 border-b border-gray-100 dark:border-background-5">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      <div className="main-container relative z-10 text-center max-w-3xl mx-auto">
        <RevealAnimation delay={0.1} direction="up">
          <div className="mb-4 inline-block">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase">Get in Touch</span>
          </div>
        </RevealAnimation>
        
        <RevealAnimation delay={0.2} direction="up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black dark:text-white mb-4">
            Contact FGCEOSA
          </h1>
        </RevealAnimation>
        
        <RevealAnimation delay={0.3} direction="up">
          <div>
            <p className="text-lg text-black/75 dark:text-white/70 leading-relaxed mb-3">
              We&apos;re here to support membership inquiries, events, donations, and general questions.
            </p>
            <p className="text-xs text-secondary font-bold tracking-wider uppercase">
              Response within 24–72 hours
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ContactHero;
