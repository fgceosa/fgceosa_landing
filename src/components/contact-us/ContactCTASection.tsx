'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ContactCTASection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-background-9 border-t border-gray-100 dark:border-background-5">
      <div className="main-container max-w-4xl mx-auto text-center">
        <RevealAnimation delay={0.1}>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-4">
              Let&apos;s Stay Connected
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-xl mx-auto mb-8">
              FGCEOSA is built on lifelong relationships. We&apos;re always here to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <LinkButton
                href="https://portal.allfgcealumni.org/sign-up"
                target="_blank"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-secondary text-white hover:bg-secondary/90 transition-all text-sm text-center shadow-lg"
              >
                Join FGCEOSA Today
              </LinkButton>
              <LinkButton
                href="/about"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-white text-secondary border border-gray-200 dark:bg-background-8 dark:text-white dark:border-background-5 hover:bg-gray-50 dark:hover:bg-background-7 transition-all text-sm text-center"
              >
                Learn More About Us
              </LinkButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ContactCTASection;
