import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface BenefitProps {
  title: string;
  description: string;
  delay: number;
}

const Benefit = ({ title, description, delay }: BenefitProps) => (
  <RevealAnimation delay={delay} direction="up">
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-background-7 shadow-sm border border-gray-100 dark:border-background-6 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold text-black dark:text-white mb-2">{title}</h4>
        <p className="text-black/70 dark:text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  </RevealAnimation>
);

const WhyJoinAbout = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background-7 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="main-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                Why Join <span className="text-secondary">FGCEOSA?</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Joining the alumni association isn't just about paying dues; it's about unlocking a lifelong ecosystem of support, growth, and impact.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <Benefit 
            delay={0.2}
            title="Global Professional Network"
            description="Instantly plug into a directory of thousands of professionals across 25+ countries. Find partners, investors, or your next hire."
          />
          <Benefit 
            delay={0.3}
            title="Career Advancement Opportunities"
            description="Gain access to exclusive job boards, industry-specific networking groups, and professional development resources."
          />
          <Benefit 
            delay={0.4}
            title="Mentorship Access"
            description="Whether you're seeking guidance as a recent grad or looking to share your expertise, our mentorship programs connect the right people."
          />
          <Benefit 
            delay={0.5}
            title="Leadership Opportunities"
            description="Take on roles within regional chapters or global committees to hone your leadership skills and drive real-world impact."
          />
          <Benefit 
            delay={0.6}
            title="Giving Back to Alma Mater"
            description="Have a structured, transparent, and high-impact way to contribute to the development of FGC Enugu."
          />
          <Benefit 
            delay={0.7}
            title="Exclusive Events & Reunions"
            description="Receive priority invitations to global reunions, galas, regional meetups, and exclusive webinars with industry leaders."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyJoinAbout;
