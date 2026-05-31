import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface MetricProps {
  number: string;
  label: string;
}

const Metric = ({ number, label }: MetricProps) => (
  <div className="flex flex-col items-center justify-center p-6 text-center">
    <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{number}</div>
    <div className="text-white/80 font-medium text-sm md:text-base uppercase tracking-widest">{label}</div>
  </div>
);

const InstantTrustStrip = () => {
  return (
    <section className="bg-secondary relative -mt-10 mb-20 z-10 w-[90%] md:w-[85%] mx-auto rounded-3xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark to-secondary opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-20 py-8 px-4">
        <RevealAnimation delay={0.2} direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            <Metric number="5000+" label="Alumni Worldwide" />
            <Metric number="25+" label="Countries" />
            <Metric number="100+" label="Initiatives" />
            <Metric number="45+" label="Projects Completed" />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default InstantTrustStrip;
